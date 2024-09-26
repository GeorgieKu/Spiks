import { rollup } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import { globs } from '../const/index.js';

function compileScripts() {
  return rollup({
    input: `./${globs.src}/index.js`,
    plugins: [
      resolve({
        browser: true,
        dedupe: ['pug'],
      }),
      commonjs(),
      babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
      (process.env.NODE_ENV === 'production' && terser()),
    ],
  })
    .then((bundle) => {
      return bundle.write({
        file: `./${globs.publicScripts}/index.js`,
        format: 'iife',
        name: 'app',
        sourcemap: true,
        sourcemapFileNames: 'maps/[name].js.map',
        sourcemapIgnoreList: (relativeSourcePath) => {
          return relativeSourcePath.includes('node_modules');
        },
      });
    });
}

export default compileScripts;
