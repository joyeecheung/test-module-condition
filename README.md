This is a repository used to test a new exports condition in Node.js that can be used to point to an ESM file no matter the package is loaded using `import` or `require`.

PR: https://github.com/nodejs/node/pull/54648

Reference: https://gist.github.com/sokra/e032a0f17c1721c71cfced6f14516c62#combining-patterns

To avoid clobbering node_modules, the CLIs are expected to be installed globally

```bash
npm install -g webpack webpack-cli
```