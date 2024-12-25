// WordPress dependencies.

// Divi dependencies.
import { type Metadata, type ModuleLibrary } from "@divi/types";

// Local dependencies.
import { conversionOutline } from "./conversion-outline";
import { CLASS_NAME_Edit } from "./edit";
import metadata from "./module.json";
import { placeholderContent } from "./placeholder-content";
import { SettingsAdvanced } from "./settings-advanced";
import { SettingsContent } from "./settings-content";
import { SettingsDesign } from "./settings-design";
import { CLASS_NAME_Attrs } from "./types";

// Styles
import "./style.css";
import "./module.scss";

export const CLASS_NAME_: ModuleLibrary.Module.RegisterDefinition<CLASS_NAME_Attrs> =
  {
    metadata: metadata as Metadata.Values<CLASS_NAME_Attrs>,
    placeholderContent,
    conversionOutline,
    settings: {
      content: SettingsContent,
      design: SettingsDesign,
      advanced: SettingsAdvanced,
    },
    renderers: {
      edit: CLASS_NAME_Edit,
    },
  };
