const path = require('path');

const rules = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|.webpack)/,
    loaders: [{
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }]
  }
];

const resolve = {
  modules: [
    path.resolve(__dirname, './node_modules'),
    path.resolve(__dirname, './src'),
  ],
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  symlinks: false,
};

module.exports = { rules, resolve };
