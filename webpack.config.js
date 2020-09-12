const path = require('path');

module.exports = {
  entry: './components/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build/',
    compress: true,
    hot: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    //   {
    //     test: /\.s[ac]ss$/i,
    //     use: ['style-loader', 'css-loader', 'sass-loader'], // download all of these if you want to apply them
    //   },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};