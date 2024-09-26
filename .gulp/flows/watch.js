import gulp from 'gulp';
import { globs } from '../const/index.js';

import {
  buildCleanSvgSprites,
  buildSvgSprites,
  compileScripts,
  compileStyles,
  compileTemplates,
  copyFonts,
  copyImages,
  copySvgSprites,
  copyOtherAssets,
  runBrowserSync,
  browserSyncInstance,
} from '../tasks/index.js';

const reloadBrowser = browserSyncInstance.reload;

function runWatchers() {
  gulp.watch(
    [
      `${globs.src}/**/*.js`,
      `!${globs.src}/**/*.stories.js`,
    ],
    compileScripts,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.src}/**/*.pug`,
    ],
    compileTemplates,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.src}/**/*.scss`,
    ],
    compileStyles,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.images}/**/*`,
    ],
    copyImages,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.otherAssets}/**/*`,
    ],
    copyOtherAssets,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.sprites}/**/*`,
    ],
    gulp.series(
      copySvgSprites,
      gulp.parallel(
        buildCleanSvgSprites,
        buildSvgSprites,
      ),
    ),
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.fonts}/**/*`,
    ],
    copyFonts,
  ).on('change', reloadBrowser);
}

export default gulp.parallel(runBrowserSync, runWatchers);
