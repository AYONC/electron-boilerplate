// NB: This file is intentionally written using ES5 because at this time,
// electron-prebuilt is not yet initialized
const { app } = require('electron');
const path = require('path');

const isDev = process.env.ELECTRON_ENV === 'development';

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
}

const isFirstInstance = app.requestSingleInstanceLock();

if (!isFirstInstance) {
  app.quit();
  process.exit(-1);
}

app.commandLine.appendSwitch('force-color-profile', 'srgb');

require('./index.ts');
