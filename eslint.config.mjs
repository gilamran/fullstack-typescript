import jsLint from '@eslint/js';
import react from 'eslint-plugin-react';
import tsLint from 'typescript-eslint';
import globals from 'globals';
import hooksPlugin from 'eslint-plugin-react-hooks';

export default [
  // config parsers
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    plugins: {
      react,
      'react-hooks': hooksPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ['*.ts', '**/*.ts'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
  },
  // rules
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  {
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
      ],
      'no-var': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-inferrable-types': 0,
    },
  },
];
