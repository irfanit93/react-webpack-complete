const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
console.log("Loader",MiniCssExtractPlugin.loader);
module.exports = {
mode:"development",
entry:{
"core-js":'core-js/stable',
"regenerator-runtime":"regenerator-runtime/runtime",
index: './src/index.js'
},
output:{
filename:'[name].bundle.js',
path:path.resolve(__dirname,'dist')
},
devServer:{
           contentBase:'./dist',
           compress:true,
           port:8000,
           writeToDisk:true,
           historyApiFallback: true
 },
module:{
	rules:[
	{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader'
    },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
	]
},
plugins: [
new webpack.ProgressPlugin(),
new MiniCssExtractPlugin(),
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({ template:'./src/index.html' })
]
};