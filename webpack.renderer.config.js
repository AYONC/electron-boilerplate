const { rules, resolve } = require('./webpack.base');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.svg$/,
  use: ['@svgr/webpack'],
});

module.exports = {
  // Put your normal webpack config below here
  resolve,
  module: {
    rules,
  },
};
