import stylistic from "@stylistic/eslint-plugin";
import parser from "@typescript-eslint/parser";

const onePerLine = {
  singleLine: { maxItems: 0 },
  multiLine: { minItems: 1 },
};

export default [{
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: { parser },
  plugins: {
    "@stylistic": stylistic,
  },
  rules: {
    "@stylistic/list-style": ["error", {
      overrides: {
        "{}": "off",
        "[]": "off",
        "()": "off",
        "<>": "off",
        ImportDeclaration: onePerLine,
      },
    }],
  },
}];
