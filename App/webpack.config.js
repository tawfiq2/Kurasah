const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html" },
    { from: "./src/about-us.html", to: "about-us.html" },
    { from: "./src/bid.html", to: "bid.html" },
    { from: "./src/add.html", to: "add.html"},
    { from: "./src/announcment.html", to: "announcment.html" },
    { from: "./src/blog.html", to: "blog.html" },
    { from: "./src/contact.html", to: "contact.html"},
    { from: "./src/listings.html", to: "listings.html" },
    { from: "./src/single-blog.html", to: "single-blog.html" },
    { from: "./src/single-listings.html", to: "single-listings.html" },
    { from: "./src/_ Home_files", to: "_ Home_files" },
    { from: "./src/about-us_files", to: "about-us_files" },
    { from: "./src/css", to: "css" },
    { from: "./src/css/style.css", to: "style.css" },
    { from: "./src/fonts", to: "fonts" },
    { from: "./src/img", to: "img" },
    { from: "./src/js", to: "js" },
    { from: "./src/js1", to: "js1" },
    { from: "./src/scss", to: "scss" },
    ]),
  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};
