const { build } = require('esbuild');
const path = require('path');

build({
  entryPoints: ['./src/require.cjs'],
  outfile: path.resolve(__dirname, 'esbuild/require.bundle.js'),
  bundle: true,
  platform: 'node', 
  format: 'cjs',
  minify: false,
}).catch(() => process.exit(1));

build({
  entryPoints: ['./src/import.mjs'],
  outfile: path.resolve(__dirname, 'esbuild/import.bundle.js'),
  bundle: true,
  platform: 'node',
  format: 'esm',
  minify: false,
}).catch(() => process.exit(1));

