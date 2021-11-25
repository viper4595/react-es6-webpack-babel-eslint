const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 3000
  },
  optimization: {
    minimize: true
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          //   {
          //     loader: 'babel-loader',
          //     options: {
          //       presets: ['@babel/preset-env', '@babel/preset-react'],
          //       plugins: [
          //         [
          //           'module-resolver',
          //           {
          //             root: ['./src/**'],
          //             alias: {
          //               features: './src/features'
          //             }
          //           }
          //         ]
          //       ]
          //     }
          //   },
          //   {
          //     loader: 'eslint-loader',
          //     options: {
          //       fix: false,
          //       eslintPath: './'
          //     }
          //   },
          'ts-loader'
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  resolve: {
    preferRelative: true,
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html',
      favicon: './public/favicon.ico',
      manifest: './public/manifest.json'
    }),
    new MiniCssExtractPlugin({
      filename: './src/components/index.css'
    })
  ]
}
