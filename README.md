# @anvilabs/commitlint-config

[![Version](https://img.shields.io/npm/v/@anvilabs/commitlint-config.svg)](http://npm.im/@anvilabs/commitlint-config)
[![Build Status](https://img.shields.io/travis/anvilabs/commtlint-config.svg)](https://travis-ci.org/anvilabs/commtlint-config)
[![Dependency Status](https://david-dm.org/anvilabs/commtlint-config/status.svg)](https://david-dm.org/anvilabs/commtlint-config)
[![devDependency Status](https://david-dm.org/anvilabs/commtlint-config/dev-status.svg)](https://david-dm.org/anvilabs/commtlint-config?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Anvilabs' commitlint config based on [@commitlint/config-conventional](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional).

## Usage

Install the package as a development dependency:

```bash
$ yarn add @commitlint/cli @anvilabs/commitlint-config --dev
# or
$ npm install @commitlint/cli @anvilabs/commitlint-config --save-dev
```

Then create a `commitlint.config.js` file in the root of your project:

```js
module.exports = {
  extends: ['@anvilabs/commitlint-config'],
};
```

New rules may be added or existing ones modified like so:

```js
module.exports = {
  extends: ['@anvilabs/commitlint-config'],
  rules: {
    // your overrides
  },
};
```

## License

[MIT License](./LICENSE) © Anvilabs LLC
