import gulp from 'gulp';
import {
  buildCleanSvgSprites,
  buildSvgSprites,
  clearPublic,
  compileScripts,
  compileStyles,
  compileTemplates,
  copyFonts,
  copyImages,
  copySvgSprites,
  copyOtherAssets,
  prettifyTemplates,
  normalizeStructure,
} from '../tasks/index.js';

const build = gulp.series(
  clearPublic,
  gulp.parallel(
    compileScripts,
    compileStyles,
    compileTemplates,
  ),
  gulp.parallel(
    copyImages,
    copyFonts,
    copySvgSprites,
    copyOtherAssets,
    buildCleanSvgSprites,
    buildSvgSprites,
  ),
  prettifyTemplates,
  normalizeStructure,
);

export default build;
