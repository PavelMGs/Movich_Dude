const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        use: 'ts-loader',
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader?modules',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],

  devServer: {
    port: 3000,
    open: false,
    hot: true,
    historyApiFallback: true,
  },

  devtool: 'source-map',
};
