import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    // Configurações gerais para o projeto
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 12,
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
  {
    // Configurações específicas para arquivos .js
    files: ['*.js'],

    rules: {
      // Defina regras específicas para os arquivos .js se necessário
    },
  },
]);
