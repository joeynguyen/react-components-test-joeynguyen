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
  // output: {
  //   dir: './dist',
  //   format: 'es',
  //   // sourcemap: true,
  //   assetFileNames: 'bundled[extname]',
  //   entryFileNames: 'bundled.js',
  // },
  output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
  ],
  plugins: [
    // replace({
    //   "process.env.NODE_ENV": JSON.stringify("development")
    // }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    node_resolve(),
    // sass(sassOptions),
    // sass({
    //   // Write all styles to the bundle destination where .js is replaced by .css
    //   output: true,
    // }),
    // sass(sassOptions),
    postcss({
      extract: true, // don't generate a separate CSS file
      modules: true,
      sourceMap: true,
      use: ['sass'],
      extensions: ['.css', '.scss'],
      // plugins: [
      // ],
      // plugins: [
      //   postcssModules({
      //     getJSON (cssFileName, json, outputFileName) {
      //       const cssName = path.basename(cssFileName, ".css");
      //       console.log("cssName", cssName);
      //       const jsonFileName = path.resolve("./build/" + cssName + ".json");
      //       console.log("jsonFileName", jsonFileName);
      //       fs.writeFileSync(jsonFileName, JSON.stringify(json));
      //     }
      //   })
      // ]
    }),
    commonjs(),
    // uglify(),
    filesize(),
  ],
  external: ['react', 'react-dom', 'prop-types', 'styled-components'],
}
