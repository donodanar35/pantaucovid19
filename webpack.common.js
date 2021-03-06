const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
      index: './src/app.js',
      index2: './src/app2.js',
      index3: './src/app3.js',
    }, 
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    optimization: {
      splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
        //image loader
        //{test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
        { test: /ignore\.(png|jpg|gif|svg)$/, loader: 'ignore-loader' },
        { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: { name: './images/[name].[ext]?[hash]' } },
       //bootstrap loader
      {
        test: /\.(scss|css)$/,
        use: [ 
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]

      }
    ]
  },

  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
        template: "./src/template.html",
        filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/tentang.html",
      filename: "tentang.html"
    })
  ]

};