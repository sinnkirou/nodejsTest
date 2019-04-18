const CleanWebpackPlugin = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const serverConfig = {
	target: "node",
	node: {
		__dirname: true
	},
	plugins: [
		new CleanWebpackPlugin(["dist"])
	],
	externals: [nodeExternals()]
};

module.exports = serverConfig;
