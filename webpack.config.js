const path = require('path');// path is an object that can be used in creating absolute paths by passing in arguements to its join method

module.exports = {
  entry: './src/app.js', //the firstfile webpack should read
  output: {
    path: path.join(__dirname, 'public'), //__dirname is a nodejs variable that stores the current project path, child paths are further added by passing more arguements in this case, the public folder
    filename: 'bundle.js' 
  },
  module: {//chunk of codes with clear functionality...how should webpack handle each file or module.
    rules: [{//all distinct instructions are written an array of rules, each rule being an object.
      loader: 'babel-loader', //runs babel for this set of files
      test: /\.js$/, //runs babel for any file that ends in .js....it is always written as a regExp
      exclude: /node_modules/ //exclude files in node_modules folder since thats automatically generated by npm
    }, {
      test: /\.s?css$/, //next rule is for files that end in .scss or .css
      use: [//same as loader, but loader is used when there is just one loader to be used. when there are multiple then "use" is used
        'style-loader', //injects the css instructions into the actual DOM
        'css-loader', //gathers all css files and puts it into a string
        'sass-loader'//gathers all sass files and converts it to string
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map', //devtools help in showing the exact line an error has occured instead of showing it by default from the bundle.js file which is cumbersome
  devServer: { //compiles the whole application and serves it
    contentBase: path.join(__dirname, 'public') //which absolute folder should it compile similar to output path.
  }
};
