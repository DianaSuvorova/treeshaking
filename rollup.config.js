import commonjs from 'rollup-plugin-commonjs';

export default {
  input: `./src/index.js`,
  output: [
    {
      file: './dist/bundle_rollup.js',
      format: 'umd',
      sourcemap: 'inline',
    },
  ],
  plugins: [
    commonjs(),
  ],
};
