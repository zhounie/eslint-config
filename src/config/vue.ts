import { pluginVue, parserVue, parserTs } from '../plugins'
import { GLOB_VUE } from '../globs'
import { type FlatESLintConfigItem } from 'eslint-define-config'

export const vue = (options: { typescript: boolean }): FlatESLintConfigItem[] => {
    return [
        {
            files: [GLOB_VUE],
            languageOptions: {
                parser: parserVue,
                parserOptions: {
                    sourceType: 'module',
                    extraFileExtensions: ['.vue'],
                    ecmaFeatures: {
                        jsx: true
                    },
                    parser: options.typescript ? parserTs as any : undefined
                }
            },
            plugins: {
                vue: pluginVue
            },
            processor: pluginVue.processors['.vue']
        }
    ]
}