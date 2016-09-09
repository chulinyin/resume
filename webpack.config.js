// webpack.config.js
module.exports = {
  // entry point of our application
  entry: './src/main.js',
  // where to place the compiled bundle
  output: {
    path: './build',
    filename: 'build.js'
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/, 
        loader: "style!css!autoprefixer"
      },
      { 
        test: /\.(scss|sass)$/, 
        loader: 'style!css!scss?sourceMap'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          // limit for base64 inlining in bytes
          limit: 10000,
          // custom naming format if file is larger than
          // the threshold
          name: '[name].[ext]?[hash]'
        }
      } 
    ]
  },
  // vue: {
  //   // use custom postcss plugins
  //   postcss: [require('postcss-cssnext')()],
  //   // disable vue-loader autoprefixing.
  //   // this is a good idea since cssnext comes with it too.
  //   autoprefixer: false
  // }
}

