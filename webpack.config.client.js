const path = require("path")
const webpack = require("webpack")
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: "eval-source-map",
    entry: [
        "webpack-hot-middleware/client?reload=true",
        path.join(CURRENT_WORKING_DIR, "main.js")
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , "/dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
      rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
        {
            test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
            use: "file-loader"
        },
        {
          test: /\.(scss)$/,
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    }
}

module.exports = config
