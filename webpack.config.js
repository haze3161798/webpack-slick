
const { url } = require('inspector');
const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, 'src'),
	entry: './index.js',
  devtool:'source-map',
	output: {
    path: path.resolve(__dirname, 'dist'),
		filename: 'index-bundle.js',
	},
  plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
    })
  ],
  module:{

    rules:[
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.html$/,
        use:{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }       
      },
      {
        test: /(\.png|\.gif|\.jp(e)?g|\.svg|\.ttf|\.woff|\.eot)$/,
        use:[
              {
                loader:'file-loader',
                  options: {
                    name: '[name].[ext]'
                  }
               },
              {
              loader:'url-loader',
                options: {
                  limit:10000,
                  name: '[name].[ext]'
                } 
              }
            ]
      },
    ]
  },

}
