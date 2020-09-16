// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     mode: 'none',
//     entry: './index.tsx',
//     target: 'web',
//     resolve: {
//         extensions: ['.ts', '.tsx', '.js']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: '/node_modules/'
//             },
//             // {
//             //   test: /\.jsx?/,
//             //   exclude: /(node_modules|bower_components)/,
//             //   use: {
//             //     loader: 'babel-loader',
//             //     options: {
//             //       presets: [
//             //         ['@babel/preset-env', { targets: { node: 'current' } }],
//             //         '@babel/preset-react',
//             //       ],
//             //     },
//             //   },
//             // },
//         ],
//     },
//     output: {
//         filename: '[name].js',
//         path: path.resolve(__dirname, 'build')
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//           template: path.join(__dirname, 'src', 'index.html')
//       })
//   ]
// }

// Alex's webpack 

// const webpack = require('webpack');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

// const config = env => ({
//   entry: {
//     app: ['./src/index.tsx'],
//   },
//   output: {
//     filename: 'index.js',
//     path: path.resolve(__dirname + '/build'),
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js', '.json'],
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname + '/build'),
//     historyApiFallback: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       hash: true,
//       filename: 'index.html',
//       title: 'Alex Katz',
//       meta: { viewport: 'width=device-width, initial-scale=1.0' }
//     }),
//     new HtmlWebpackRootPlugin(),
//     ...(env === 'production' ? [
//       new webpack.DefinePlugin({
//         'process.env.NODE_ENV': JSON.stringify('production')
//       }),
//       new webpack.optimize.UglifyJsPlugin(),
//     ] : []),
//   ],
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         include: [path.resolve(__dirname + '/src')],
//         loader: 'babel-loader',
//       },
//       // {
//       //   test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
//       //   include: [path.resolve(__dirname + '/src')],
//       //   loader: 'url-loader?limit=50000&name=[name].[ext]',
//       // },
//     ],
//   },
// });

// module.exports = config;

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // path.resolve(__dirname, 'src') + '/index.tsx',
    './scr/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist'
  }
};

// module.exports = config;