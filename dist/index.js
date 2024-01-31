// src/config/javascript.ts
var javascript = [
  {
    rules: {
      "no-console": "warn"
    }
  }
];

// src/plugins.ts
import { default as default2 } from "eslint-plugin-vue";
import { default as default3 } from "@typescript-eslint/eslint-plugin";
import { default as default4 } from "vue-eslint-parser";
import { default as default5 } from "@typescript-eslint/parser";

// src/globs.ts
var GlOB_TS = "**/*.ts";
var GLOB_TSX = "**/*.tsx";
var GLOB_VUE = "**/*.vue";

// src/config/vue.ts
var vue = (options) => {
  return [
    {
      files: [GLOB_VUE],
      languageOptions: {
        parser: default4,
        parserOptions: {
          sourceType: "module",
          extraFileExtensions: [".vue"],
          ecmaFeatures: {
            jsx: true
          },
          parser: options.typescript ? default5 : void 0
        }
      },
      plugins: {
        vue: default2
      },
      processor: default2.processors[".vue"]
    }
  ];
};

// src/config/typescript.ts
var typescript = [
  {
    files: [GlOB_TS, GLOB_TSX],
    languageOptions: {
      parser: default5,
      parserOptions: {
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": default3
    }
  }
];

// src/default.ts
function zhounie(options = {}) {
  const config = [];
  config.push(...javascript);
  if (options.typescript) {
    config.push(...typescript);
  }
  if (options.vue) {
    config.push(...vue({ typescript: !!options.typescript }));
  }
  return config;
}

// src/index.ts
var src_default = zhounie;
export {
  src_default as default,
  default5 as parserTs,
  default4 as parserVue,
  default3 as pluginTs,
  default2 as pluginVue,
  zhounie
};
