import path from 'node:path'

import { defineConfig } from 'eslint/config'
import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import { configs, plugins } from 'eslint-config-airbnb-extended'
import { configs as eslintConfigs } from '@jenssimon/eslint-config-base'
import globals from 'globals'


const gitignorePath = path.resolve('.', '.gitignore')


const jsConfig = [
  // ESLint Recommended Rules
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // Stylistic Plugin
  plugins.stylistic,
  // Import X Plugin
  plugins.importX,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
]


export default defineConfig(
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      '.yarn/',
    ],
  },

  jsConfig,

  eslintConfigs.base,

  {
    files: [
      '**/*.js',
    ],
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
    },
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
)
