## Exploring treeshaking with rollup and webpack 4.

1. Treeshaling only works for named exports.
If object is exported and only part of it is imported, the whole object will end up in the bundle.

Source file: [src/index.js](./src/index.js), rollup's bundle: [./dist/bundle_rollup.js](./dist/bundle_rollup.js)

2. Treeshaking with webpack only works during minification process. [Source](https://github.com/webpack/webpack/issues/3459)
So I couldn't directly compare webpack and rollup bundles but seems like the result is the same.