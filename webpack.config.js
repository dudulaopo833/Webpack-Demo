var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
	entry: {app: "./src/app.js"},
	output: {
		path: __dirname + "/dist",
		filename: "js/[name]-[hash].js" //entry should be object, then can use [name]
	},
	plugins:[
		new htmlWebpackPlugin({
			template: "index.html",
			filename: "index-[hash].html",
			inject: "head"
		})
	],
	module: {
		rules: [
			use
		]
	}
		
};
