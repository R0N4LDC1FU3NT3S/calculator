const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: "./src",
	output: {
		path: path.resolve(__dirname, "../build"),
		filename: "[name].[contenthash].js"
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: "asset"
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "public/index.html"
		})
	],
	devtool: "eval-source-map"
}
