export const SRC_DIRNAME = '../src';
export const DEST_DIRNAME = '../public';

export const globs = {
  src: `${SRC_DIRNAME}`,
  dest: `${DEST_DIRNAME}`,
  pages: `${SRC_DIRNAME}/pages`,
  core: `${SRC_DIRNAME}/core`,
  
  assets: `${SRC_DIRNAME}/core/assets`,
  fonts: `${SRC_DIRNAME}/core/assets/fonts`,
  images: `${SRC_DIRNAME}/core/assets/images`,
  sprites: `${SRC_DIRNAME}/core/assets/sprites`,
  otherAssets: `${SRC_DIRNAME}/core/assets/other`,
  
  fontsToConvert: `.convert/fonts`,
  
  publicScripts: `${DEST_DIRNAME}/js`,
  publicStyles: `${DEST_DIRNAME}/css`,
  publicAssets: `${DEST_DIRNAME}/assets`,
  publicFonts: `${DEST_DIRNAME}/assets/fonts`,
  publicImages: `${DEST_DIRNAME}/assets/images`,
  publicSprites: `${DEST_DIRNAME}/assets/sprites`,
  publicOtherAssets: `${DEST_DIRNAME}/assets/other`,
};