
import { vue, typescript  } from './config'
import { type FlatESLintConfigItem } from 'eslint-define-config'

interface Options {
    typescript?: boolean
    vue?: boolean
}

export function zhounie (options: Options = {}): FlatESLintConfigItem[] {

    const config: FlatESLintConfigItem[] = []

    if (options.typescript) {
        config.push(...typescript)
    }

    if (options.vue) {
        config.push(...vue)
    }

    return config
}