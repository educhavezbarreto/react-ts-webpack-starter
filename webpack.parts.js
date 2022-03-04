const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

exports.loadTypescript = () => ({
  module: {
    rules: [
      {
        test: /.(j|t)sx?$/i,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                ['@babel/preset-react', {runtime: 'automatic'}],
              ],
            },
          },
        ],
      },
    ],
  },
});

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

exports.devServer = () => ({
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    liveReload: true,
    historyApiFallback: true,
    static: './public',
  },
});

exports.loadHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});

exports.eslint = (extensions) => ({
  plugins: [new EslintWebpackPlugin({extensions})],
});
