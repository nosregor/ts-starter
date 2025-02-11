import js from '@eslint/js'; // ESLint's recommended rules
import ts from '@typescript-eslint/eslint-plugin'; // TypeScript plugin
import tsParser from '@typescript-eslint/parser'; // TypeScript parser
import prettier from 'eslint-plugin-prettier'; // Prettier plugin

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  {
    ignores: [
      'node_modules/', // ignore its content
      'dist/', // unignore `node_modules/mylibrary` directory
    ],
  },

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx'], // Apply to TypeScript files
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      ecmaVersion: 2018, // ECMAScript version
      sourceType: 'module', // Use ES modules
      globals: {
        // Add Node.js globals
        process: 'readonly',
      },
    },
    env: {
      node: true, // Enable Node.js environment
    },
    plugins: {
      '@typescript-eslint': ts, // Enable TypeScript plugin
    },
    rules: {
      // TypeScript-specific rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // Prettier configuration
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'], // Apply to all JS/TS files
    plugins: {
      prettier, // Enable Prettier plugin
    },
    env: {
      node: true, // Enable Node.js environment
    },
    rules: {
      'prettier/prettier': 'error', // Enforce Prettier formatting
      'no-console': 1, // Means warning
    },
  },
];
