import { build } from './flows/index.js';

export {
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
  convertFonts,
  deploy,
} from './tasks/index.js';

export { watch } from './flows/index.js';
export default build;
