const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_, argv) => {
  const isProd = argv.mode === 'production';
  const baseConfig = {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'source-map',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[hash].bundle.js',
      chunkFilename: '[name].[chunkhash].bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?/,
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, './tsconfig.json'),
          },
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
      new CopyWebpackPlugin({
        patterns: [
          'src/CNAME',
          'src/404.html',
          'src/favicon-128.png',
          { from: 'assets/images', to: 'images' },
        ],
      }),
    ],
  };

  if (isProd) {
    return baseConfig;
  }
  return {
    ...baseConfig,
    devServer: {
      contentBase: './build',
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
  };
};
