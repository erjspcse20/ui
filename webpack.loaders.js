const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components|public\/)/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'env', 'stage-1'],
      },
    }, 
    {
      test: /\.s?css$/,
      use: CSSExtract.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          } 
        ]
      })
    },
    {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
      exclude: ['node_modules'],
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'file-loader',
    },
    {
      test: /\.(woff|woff2)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'file-loader?prefix=font/&limit=5000',
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'file-loader?limit=10000&mimetype=application/octet-stream',
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'file-loader?limit=10000&mimetype=image/svg+xml',
    },
    {
      test: /\.gif/,
      exclude: /(node_modules|bower_components)/,
      loader: 'file-loader?limit=10000&mimetype=image/gif',
    },
    {
      test: /\.jpg/,
      exclude: /(node_modules|bower_components)/,
      loader: 'file-loader?limit=10000&mimetype=image/jpg',
    },
    {
      test: /\.png/,
      exclude: /(node_modules|bower_components)/,
      loader: 'file-loader?limit=10000&mimetype=image/png',
    },
  ];
