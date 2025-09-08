import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.vitest 
      }
    },
    rules: {
      "no-unused-vars": "warn"
    },
    extends: [js.configs.recommended]
  }
]);
