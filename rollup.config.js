import fs from 'fs';
import path from 'path';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import sass from 'rollup-plugin-sass';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import css from 'rollup-plugin-hot-css';
import { uglify } from 'rollup-plugin-uglify';
import replace from '@rollup/plugin-replace';
import postcssModules from 'postcss-modules';


import pkg from './package.json';


const sassOptions = {
  output(styles, styleNodes) {
    console.log("styles", styles);
    fs.mkdirSync('dist/css', { recursive: true }, (err) => {
      if (err) {
        throw err;
      }
    });

    styleNodes.forEach((item) => {
      console.log("styleNode", item);
      const { id, content } = item;
      const scssName = id.substring(id.lastIndexOf('/') + 1, id.length);
      const name = scssName.split('.')[0];
      fs.writeFileSync(`dist/css/${name}.css`, content);
    });
  },
  processor: css => postcss([
    autoprefixer({
      grid: false
    }),
    cssnano()
  ])
    .process(css)
    .then(result => result.css)
};


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
      extract: true, // don't generate a separate CSS file
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
    // uglify(),
    filesize(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
}
