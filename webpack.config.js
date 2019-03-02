const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
      extensions: ['.ts', '.tsx', '.js']
  },
  module: {
      rules: [
          { 
            test: /\.(ts|tsx)$/,
            loader: ['awesome-typescript-loader']
          },
          {
            test: /\.js$/,
            loader: ['source-map-loader'],
            enforce: 'pre'
          }
      ]
  }
};