const { rules, resolve } = require('./webpack.base');

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main/index.ts',
  resolve,
  module: {
    rules,
  },
};
