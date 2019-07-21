import { app, remote } from 'electron';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

const electronApp = app || remote.app;

// eslint-disable-next-line operator-linebreak
const appDirectory =
  process.env.ELECTRON_ENV === 'development' ? fs.realpathSync(process.cwd()) : electronApp.getAppPath();
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const userDataPath = electronApp.getPath('userData');

const homeDir = os.homedir ? os.homedir() : process.env.HOME;
const logDir = process.platform === 'darwin'
  ? path.join(homeDir, 'Library', 'Logs', path.basename(userDataPath))
  : path.join(userDataPath, 'Logs');

export const Paths = {
  SrcRenderer: resolveApp('src/renderer'),
  SrcMain: resolveApp('src/main'),
  AppUserData: userDataPath,
  LogDir: logDir,
};
