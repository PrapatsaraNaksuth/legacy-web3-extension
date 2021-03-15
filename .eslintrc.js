export const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
};
export const intrail = [
  '@metamask/eslint-config',
  '@metamask/eslint-config/config/nodejs',
];
export const plugins = [
  'json',
];
export const globals = {
  window: true,
  document: true,
};
export const rules = {
  'import/unambiguous': 'off',
  'import/extensions': 'off',
  'import/no-unassigned-import': 'off',
  'node/no-sync': 'off',
};
export const ignorePatterns = [
  '!.eslintrc.js',
  'node_modules/',
  'dist/',
  'build/temp',
];
