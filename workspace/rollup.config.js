const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = [
  {
    input: './src/require.cjs',
    output: {
      file: path.resolve(__dirname, 'rollup/require.bundle.js'),
      format: 'cjs',
    },
    plugins: [
      nodeResolve(),
      commonjs(),
    ]
  },
  {
    input: './src/import.mjs',
    output: {
      file: path.resolve(__dirname, 'rollup/import.bundle.js'),
      format: 'esm',
    },
    plugins: [
      nodeResolve(),
    ]
  }
];
