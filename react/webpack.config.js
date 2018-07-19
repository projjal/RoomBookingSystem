module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env','es2015','stage-2']
        }
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      proxy: {
        '/api':{
          target:'http://localhost:8080',
          changeOrigin: true
        }
      },
      historyApiFallback: true,
      contentBase: './'
    }
  };