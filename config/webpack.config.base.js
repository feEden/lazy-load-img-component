module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/, 
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader'],
				exclude: /node_modules/,
			},
      {
        test: /\.(jpe?g|png|gif|svg)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name][hash:8].[ext]'
          }
        }
      }
    ]
  }
}