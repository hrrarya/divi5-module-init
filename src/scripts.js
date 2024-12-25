#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import { replaceInFile } from "replace-in-file";

// Input and output paths
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dir = path.resolve(path.dirname("./"));

const builderSourceDir = path.resolve(__dirname, "../builder/CLASS_NAME_");
const frontendSourceDir = path.resolve(__dirname, "../frontend/CLASS_NAME_");

const builderDestDir = path.resolve("./src/components/CLASS_NAME_");
const frontendDestDir = path.resolve("./modules/CLASS_NAME_");

async function copyModule() {
  const className = "CLASS_NAME_";
  try {
    // Check if source folders exist
    if (!(await fs.pathExists(builderSourceDir))) {
      console.error(
        `Builder folder for ${className} does not exist at ${builderSourceDir}`
      );
      return;
    }

    if (!(await fs.pathExists(frontendSourceDir))) {
      console.error(
        `Frontend folder for ${className} does not exist at ${frontendSourceDir}`
      );
      return;
    }

    // Copy folders
    await fs.copy(builderSourceDir, builderDestDir);
    await fs.copy(frontendSourceDir, frontendDestDir);
  } catch (err) {
    console.error(`Error copying folders for ${className}:`, err);
  }
}

async function promptUser() {
  return await inquirer.prompt([
    {
      name: "moduleName",
      message: "Enter the Module Name:",
      default: "Next Image Hover Box",
    },
    {
      name: "moduleNamePlural",
      message: "Enter the Module Name Plural:",
      default: "Next Image Hover Boxes",
    },
    {
      name: "className",
      message: "Enter the Class Name For Your Module",
      default: "NextImageHoverBox",
    },
    {
      name: "textDomain",
      message: "Enter the text-domain:",
      default: "image-hover-box",
    },
    {
      name: "moduleIcon",
      message: "Enter the Module Icon:",
      default: "image-hover-box",
    },
    {
      name: "divi4ShortCode",
      message: "Enter the d4ShortCode:",
      default: "dnxte_image_hover_box",
    },
  ]);
}

async function updatePlaceholders(replacements) {
  const options = {
    allowEmptyPaths: true,
    files: [
      `${dir}/modules/CLASS_NAME_/**/*.php`,
      `${dir}/src/components/CLASS_NAME_/**/*.json`,
      `${dir}/src/components/CLASS_NAME_/**/*.md`,
      `${dir}/src/components/CLASS_NAME_/**/*.ts`,
      `${dir}/src/components/CLASS_NAME_/**/*.tsx`,
      `${dir}/src/components/CLASS_NAME_/**/*.scss`,
    ],
    from: [
      /CLASS_NAME_/g,
      /MODULE_NAME_PLURAL_/g,
      /MODULE_NAME_/g,
      /MODULE_TEXTDOMAIN_/g,
      /MODULE_ICON_/g,
      /DIVI4_SHORTCODE_SLUG_/g,
    ],
    to: [
      replacements.className,
      replacements.moduleNamePlural,
      replacements.moduleName,
      replacements.textDomain,
      replacements.moduleIcon,
      replacements.divi4ShortCode,
    ],
  };

  try {
    await replaceInFile(options);
  } catch (e) {
    console.error("Error updating placeholders: ", e);
  }
}

// Rename main plugin file
function renameMainFile(answers) {
  if (!fs.existsSync(dir + "/src/components/CLASS_NAME_")) {
    return;
  }

  const oldFiles = [
    path.join(dir + "/modules/CLASS_NAME_"),
    path.join(dir + "/src/components/CLASS_NAME_"),
    path.join(dir + "/modules/CLASS_NAME_/CLASS_NAME_.php"),
    path.join(dir + "/modules/CLASS_NAME_/CLASS_NAME_Trait"),
  ];
  const newFiles = [
    path.join(dir + `/modules/${answers.className}`),
    path.join(dir + `/src/components/${answers.className}`),
    path.join(dir + `/modules/CLASS_NAME_/${answers.className}.php`),
    path.join(dir + `/modules/CLASS_NAME_/${answers.className}Trait`),
  ];

  for (var i = oldFiles.length - 1; i >= 0; i--) {
    if (fs.existsSync(oldFiles[i])) {
      fs.renameSync(oldFiles[i], newFiles[i]);
    } else {
      console.warn(`${oldFiles?.[i]} file not found. Skipping rename.`);
    }
  }
}

// Run the script
(async () => {
  await copyModule();
  const answers = await promptUser();

  await updatePlaceholders(answers);
  renameMainFile(answers);

  console.info(
    `Module: ${answers.moduleName} initialized
  
Happy Coding.....
  `
  );
})();
