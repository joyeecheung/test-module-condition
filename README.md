This is a repository used to test a new exports condition in Node.js that can be used to point to an ESM file no matter the package is loaded using `import` or `require`.

PR: https://github.com/nodejs/node/pull/54648

Reference: https://gist.github.com/sokra/e032a0f17c1721c71cfced6f14516c62#combining-patterns

To avoid clobbering node_modules, the CLIs are expected to be installed globally

```bash
npm install -g webpack webpack-cli
```

The current output

```
$ webpack --config webpack.config.js
$ ../node/out/Release/node --experimental-require-module ./src/import.mjs

import-module-require import
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import module

$ node dist/require.bundle.js
import-module-require module
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import require

$ ../node/out/Release/node src/import.mjs
import-module-require import
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import module

$ node dist/import.bundle.js
import-module-require import
module-and-import module
module-and-require module
module-import-require module
module-only module
module-require-import module
require-module-import module
```