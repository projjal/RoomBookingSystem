const bodyParser = require("body-parser");
const fs= require('fs');
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
      before: function(app) {
        app.use(bodyParser.json());
        app.post("/download/img",(req,res)=>{
          var filePath= req.body.filePath;
          console.log(filePath);
          fs.readFile(filePath,'utf-8',(err,data)=>{
            if(err){
              res
                .status(403)
                .contentType("application/json")
                .json({"imgData":null});
            }
            else{
              res
                .status(200)
                .contentType("application/json")
                .json({"imgData":data});
            }
          })
        });
        app.post(
          "/upload/img",
          (req, res) => {
            //const targetPath="/img/url";
            console.log(req.body.type);
            var type=req.body.type;
            var imageString= req.body.img;
            var timeStamp=Date.now();
            var filePath='./assets/images/'+type+timeStamp+'.txt';
            fs.writeFile(filePath,imageString,(err)=>{
              if(err){
                res
                  .status(403)
                  .contentType("application/json")
                  .json({"imgUrl":null});
              }
              else{
                res
                  .status(200)
                  .contentType("application/json")
                  .json({"imgUrl":filePath});
              }
            })
            
          }
        );
      },
      proxy: {
        '/api':{
          target:'http://10.41.120.32:8080',
          changeOrigin: true
        }
      },
      historyApiFallback: true,
      contentBase: './'
    }
  };