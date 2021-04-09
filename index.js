module.exports = {
  rules: {
    // eslint-plugin-import
    'import/order': ['error', { 'newlines-between': 'always', alphabetize: { order: 'asc' } }],
    // typescript-eslint
    '@typescript-eslint/consistent-indexed-object-style': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-implicit-any-catch': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    //Possible Errors: These rules relate to possible syntax or logic errors in JavaScript code:
    'no-async-promise-executor': ['error'],
    'no-cond-assign': 'error',
    'no-console': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-func-assign': ['error'],
    'no-obj-calls': ['error'],
    'no-prototype-builtins': ['error'],
    'no-sparse-arrays': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    //Best Practices: These rules relate to better ways of doing things to help you avoid problems:
    'array-callback-return': 'error',
    'default-case': ['error'],
    radix: ['error'],
    eqeqeq: ['error'],
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': ['off', { ignoreEnums: true, ignoreArrayIndexes: true }],
    'no-useless-concat': ['error'],
    //Stylistic Issues: These rules relate to style guidelines, and are therefore quite subjective:
    'max-len': ['error', { code: 100, ignoreComments: true }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
    //Variables: These rules relate to variable declarations:
    'no-delete-var': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    //ECMAScript 6
    'prefer-const': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
  },
};
