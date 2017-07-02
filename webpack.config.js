const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const hwpc=new htmlWebpackPlugin({
	template:'index.html',
	filename:'index.html',
	inject:'body'
})
module.exports={
	context:__dirname+'/components',
	entry:{
		javascript:'./index.js',
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'server.js'
	},
	resolve:{
		extensions:['.js','.jsx']
	},
	module:{
		rules:[
		{test:/\.js$/,exclude:/node_modules/,loaders:['babel-loader']},
		{test:/\.jsx$/,exclude:/node_modules/,loaders:['babel-loader']},

	]
	},
	plugins:[hwpc]
}
                    