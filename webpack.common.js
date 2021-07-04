const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
      index: './src/app.js'},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        //image loader
        //{test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
        { test: /ignore\.(png|jpg|gif|svg)$/, loader: 'ignore-loader' },
        { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } },
        //css loader
        //{ test: /\.css$/, use: 'css-loader' },
        //babel loader
        {
            test: /\.js$/,
            exclude: "/node_modules/",
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            ]
        },
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