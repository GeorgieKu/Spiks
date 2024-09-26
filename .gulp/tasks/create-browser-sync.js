import browserSync from 'browser-sync';
import { globs } from '../const/index.js';

export const browserSyncInstance = browserSync.create();

export default function initBrowserSync() {
  browserSyncInstance.init({
    server: {
      baseDir: globs.dest,
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
    startPath: '/index',
    open: false,
    ui: {
      port: 9090,
    },
    logLevel: 'info',
    reloadOnRestart: true,
  });
}
