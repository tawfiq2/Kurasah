const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "./index.html", to: "index.html" },
    { from: "./about-us.html", to: "about-us.html" },
    { from: "./bid.html", to: "bid.html" },
    { from: "./add.html", to: "add.html"},
    { from: "./announcment.html", to: "announcment.html" },
    { from: "./owner.html", to: "owner.html" },
    { from: "./blog.html", to: "blog.html" },
    { from: "./contact.html", to: "contact.html"},
    { from: "./listings.html", to: "listings.html" },
    { from: "./single-blog.html", to: "single-blog.html" },
    { from: "./single-listings.html", to: "single-listings.html" },
    { from: "./_ Home_files", to: "_ Home_files" },
    { from: "./about-us_files", to: "about-us_files" },
    { from: "./css", to: "css" },
    { from: "./style.css", to: "style.css" },
    { from: "./fonts", to: "fonts" },
    { from: "./img", to: "img" },
    { from: "./js", to: "js" },
    { from: "./js1", to: "js1" },
    { from: "./scss", to: "scss" },
    ]),
  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};
