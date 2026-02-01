/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'order/properties-order': [],
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'prettier/prettier': true,
  },
}
