# Divi5 Module Init CLI Tool

The `divi5-module-init` CLI tool simplifies the creation of Divi 5 modules by generating the necessary boilerplate code for your project.

---

## Installation

Install the CLI tool globally via npm:

```bash
npm install -g divi5-module-init
```

---

## Usage

### Step 1: Navigate to Your Plugin Directory

Navigate to the directory where you want to create your Divi 5 module:

```bash
cd your-plugin-directory
```

### Step 2: Run the Command

Run the CLI tool:

```bash
divi5-module-init
```

### Step 3: Answer the Questions

The CLI will prompt you to enter the following details:

1. **Module Name**: The name of your module (e.g., `Next Image Hover Box`).
2. **Module Name Plural**: The plural form of the module name (e.g., `Next Image Hover Boxes`).
3. **Class Name For Your Module**: The class name for your module (e.g., `NextImageHoverBox`).
4. **Text-Domain**: The text domain for your module (e.g., `image-hover-box`).
5. **Module Icon**: The icon name for your module (e.g., `image-hover-box`).

Once you've provided the necessary details, the tool will generate your module.

### Step 4: Finalize the Module

1. Import your module into the `src/index.ts` file and use `registerModule` function to add:

   ```typescript
   import { YourModuleName } from "./modules/your-module-name";

   registerModule(YourModuleName.metadata, omit(YourModuleName, "metadata"));
   ```

2. Export your icon in `src/icons/index.ts`:

   ```typescript
   export * as YourModuleName from "./YourModuleName";
   ```

3. Add your module icon to `src/module-icons.ts` and add the icon to divi's global icon map:

   ```typescript
   import { YourIcon } from './icons/your-icon';

   [YourIcon.name]: YourIcon,
   ```

4. add your module php files to `modules/Modules.php` file and add this to global module:

```php
  use YOUR_NAMESPACE\YourModuleName;

  $dependency_tree->add_dependency( new YourModuleName() );
```

---

## Issues

1. namespace not found:
   solution: run `composer dump-autoload`

---

## Code Snippets

To make development faster, you can use the provided snippets.

Copy the content from the [snippets.json](https://raw.githubusercontent.com/hrrarya/divi5-module-init/refs/heads/main/snippets/snippets.json) file and paste it into your code editor’s snippets configuration file. This will allow you to quickly scaffold code for your modules.

---

## Contribution

We welcome contributions! If you find a bug or have an idea for an improvement, please:

1. Fork the repository.
2. Create a new branch (`feature/my-feature` or `fix/my-bug`).
3. Make your changes.
4. Open a pull request.

Make sure your code adheres to the existing coding standards and includes necessary documentation and tests.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Support

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/hrrarya/divi5-module-init). For additional support, contact [hrrarya6@gmail.com].
