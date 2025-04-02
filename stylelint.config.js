// @ts-check

/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-html/vue", "stylelint-config-recess-order"],
  plugins: ["stylelint-scss", "stylelint-order", "stylelint-prettier"],
  overrides: [
    {
      files: ["**/*.(css|html|vue)"],
      customSyntax: "postcss-html"
    },
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss",
      extends: ["stylelint-config-standard-scss", "stylelint-config-recommended-vue/scss"]
    }
  ],
  rules: {
    "function-no-unknown": null,
    "scss/function-no-unknown": null,
    "value-keyword-case": null, // 在 css 中使用 v-bind，不报错
    "prettier/prettier": true,
    "selector-class-pattern": null,
    "declaration-block-no-duplicate-custom-properties": null,
    "number-max-precision": null,
    "no-duplicate-selectors": null,
    "no-descending-specificity": null,
    "no-empty-source": null,
    "scss/dollar-variable-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"]
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep", "v-global", "v-slotted"]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "function", "if", "each", "include", "mixin", "use"]
      }
    ],
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "first-nested"]
      }
    ],
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
    "order/order": [
      [
        "dollar-variables",
        "custom-properties",
        "at-rules",
        "declarations",
        {
          type: "at-rule",
          name: "supports"
        },
        {
          type: "at-rule",
          name: "media"
        },
        "rules"
      ],
      { severity: "warning" }
    ]
  },
  ignoreFiles: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx", "report.html"]
};
