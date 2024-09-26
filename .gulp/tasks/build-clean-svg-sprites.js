import gulp from 'gulp';
import buildSvgSprite from 'gulp-svg-sprite';
import clearSvg from 'gulp-cheerio';
import { globs } from '../const/index.js';
import { cheerioConfig, svgSpriteConfig } from '../configs/index.js';

async function buildCleanSvgSprites(cb) {
  return gulp
    .src(`${globs.sprites}/*.svg`)
    .pipe(clearSvg(cheerioConfig))
    .pipe(buildSvgSprite(svgSpriteConfig.typeClean))
    .pipe(gulp.dest(globs.publicSprites))
    .on('end', cb)
    .on('error', cb);
}

export default buildCleanSvgSprites;
