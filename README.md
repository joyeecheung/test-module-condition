This is a repository used to test a new exports condition in Node.js that can be used to point to an ESM file no matter the package is loaded using `import` or `require`, so that it supports shipping patterns like this:

```json5
{
  "type": "module",
  "exports": {
    "node": {
      // On new version of Node.js, both require() and import get the ESM version
      "module": "./index.js",
      // On older version of Node.js, where "module" and require(esm) are not supported,
      // use the transpiled CJS version for require()
      "require": "./dist/index.cjs"
    },
    // On any other environment, or when it's imported on older version of Node.js,
    // use the ESM version.
    "default": "./index.js"
  }
}
```

This is taking the existing `module` condition already supported by bundlers. See https://gist.github.com/sokra/e032a0f17c1721c71cfced6f14516c62

### Tested output

### Native node

Using https://github.com/nodejs/node/pull/54648

```
$ ../node/out/Release/node workspace/src/import.mjs
import-module-require import
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import module

$ ../node/out/Release/node --experimental-require-module workspace/src/require.cjs
import-module-require module
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import require
```

#### Webpack

The bundled version runs the same as the native version:

```
$ npm run webpack

$ node workspace/webpack/require.bundle.js
import-module-require module
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import require

$ node workspace/webpack/import.bundle.js
import-module-require import
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import module
```

#### esbuild

The bundled version runs the same as the native version:

```
$ npm run esbuild

$ node workspace/esbuild/require.bundle.js
import-module-require module
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import require

$ node workspace/esbuild/import.bundle.js
import-module-require import
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import module
```

#### Rollup

Unlike the previous two, rollup does not seem to support insertion-order priorities of module conditions, and "module" always take precedence.

```
$ npm run rollup

$ node workspace/rollup/require.bundle.js
import-module-require module
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import module

$ node workspace/rollup/import.bundle.js
import-module-require module
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import module
```
