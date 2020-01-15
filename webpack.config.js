const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  watch: true,
  mode: "development", //production
  entry: "./src/index.tsx",
  output: {
    filename: "./bundle.js" // ./dist/[name]-[hash].js
  },
  //devtool: "inline-source-map",
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ],
        include: path.join(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 2
            }
          },
          "sass-loader"
        ]
      }
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ["css-loader", "sass-loader"]
      //   }),
      //   include: path.join(__dirname, "src"),
      //   exclude: /node_modules/
      // }
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: "style-loader" }, // to inject the result into the DOM as a style block
      //     { loader: "css-modules-typescript-loader" }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
      //     //{ loader: "css-loader", options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
      //     //{ loader: "sass-loader" } // to convert SASS to CSS
      //     // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
      //   ],
      //   exclude: /node_modules/
      // },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new WebpackShellPlugin({
      onBuildStart: ["npm run build:style-typings"],
      dev: false // makes sure command runs on file change
    }),
    new webpack.WatchIgnorePlugin([/scss\.d\.ts$/, /css\.d\.ts$/]),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[id].css"
    })
    // new ExtractTextPlugin({
    //   filename: "[name].css",
    //   disable: false,
    //   allChunks: true
    // })
  ]
};
