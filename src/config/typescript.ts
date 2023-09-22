import { pluginTs, parserTs } from '../plugins'
import { GlOB_TS, GLOB_TSX } from '../globs'
import { type FlatESLintConfigItem } from 'eslint-define-config'

export const typescript: FlatESLintConfigItem[] = [
    {
        files: [GlOB_TS, GLOB_TSX],
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                sourceType: 'module',
            }
        },
        plugins: {
            '@typescript-eslint': pluginTs
        }
    }
]