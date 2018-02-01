const merge = require('lodash.merge');

module.exports = merge(require('@commitlint/config-conventional'), {
  rules: {
    'scope-case': [0],
  },
});
