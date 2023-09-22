import { pluginVue, parserVue } from '../plugins'
import { GLOB_VUE } from '../globs'
import { type FlatESLintConfigItem } from 'eslint-define-config'

export const vue: FlatESLintConfigItem[] = [
    {
        files: [GLOB_VUE],
        languageOptions: {
            parser: parserVue,
            parserOptions: {
                sourceType: 'module',
                extraFileExtensions: ['.vue'],
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            vue: pluginVue
        },
        processor: pluginVue.processors['.vue']
    }
]