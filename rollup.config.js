import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-hot-css';
import { uglify } from 'rollup-plugin-uglify';
import replace from '@rollup/plugin-replace';

module.exports = {
  input: './src/components/index.js',
  output: {
    dir: './dist',
    format: 'cjs',
    assetFileNames: 'bundled[extname]',
    entryFileNames: 'bundled.js',
  },
  plugins: [
    node_resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    css({
      file: 'styles.css',
      loaders: ['scss'],
    }),
    uglify(),
  ],
  external: ['react', 'react-dom', 'prop-types', 'styled-components'],
}
