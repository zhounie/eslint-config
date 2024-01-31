
import { vue, typescript, javascript  } from './config'
import { type FlatESLintConfigItem } from 'eslint-define-config'

interface Options {
    typescript?: boolean
    vue?: boolean
}

export function zhounie (options: Options = {}): FlatESLintConfigItem[] {

    const config: FlatESLintConfigItem[] = []
    config.push(...javascript)

    if (options.typescript) {
        config.push(...typescript)
    }

    if (options.vue) {
        config.push(...vue({typescript: !!options.typescript}))
    }

    return config
}