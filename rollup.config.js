import fs from 'fs';
import path from 'path';
import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import postcssModules from 'postcss-modules';

import pkg from './package.json';

export default {
  input: './src/components/index.js',
  output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    node_resolve(),
    postcss({
      extract: true, // generate a separate CSS file (for CSS Modules)
      modules: true,
      sourceMap: true,
      use: ['sass'],
      extensions: ['.css', '.scss'],
      plugins: [
        postcssModules({
          getJSON (cssFileName, json, filePath) {
            fs.mkdirSync('dist/css', { recursive: true }, (err) => {
              if (err) {
                throw err;
              }
            });
            // we can use this to write files/copy files to /dist
            const cssName = path.basename(cssFileName, ".css");
            const outputFilePath = path.resolve("./dist/css/" + cssName);
            fs.copyFileSync(filePath, outputFilePath)
          }
        })
      ]
    }),
    commonjs(),
    filesize(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
}
