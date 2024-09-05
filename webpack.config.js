const path = require('path');

module.exports = {
  entry: { require: './src/require.cjs', import: './src/import.mjs' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'webpack'),
  },
  target: 'node',
  optimization: {  // Disable minification to see the outputs
    minimize: false
  }
}
