import { FlatESLintConfigItem } from 'eslint-define-config';
export { default as pluginVue } from 'eslint-plugin-vue';
export { default as pluginTs } from '@typescript-eslint/eslint-plugin';
export { default as parserVue } from 'vue-eslint-parser';
export { default as parserTs } from '@typescript-eslint/parser';

interface Options {
    typescript?: boolean;
    vue?: boolean;
}
declare function zhounie(options?: Options): FlatESLintConfigItem[];

export { zhounie as default, zhounie };
