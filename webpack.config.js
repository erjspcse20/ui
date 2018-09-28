const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const loaders = require('./webpack.loaders.js');

module.exports = (env) =>{
  //console.log('env',env);
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return{
          entry: './src/app.js',
          output: {
            path: path.join(__dirname, 'public','dist'),
            filename: 'bundle.js'
          },
          module: {
            rules: [
              {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|public\/)/,
                loader: 'babel-loader',
                options: {
                  presets: ['react', 'env', 'stage-1'],
                },
              },
              {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "not_exist_path")
                ],
                loader: "style!css"
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
              }
            ]
          },
          plugins: [
            CSSExtract
          ],
          //devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
          devtool: isProduction ? 'source-map' : 'inline-source-map',
          devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
          }
        };
  };
 
