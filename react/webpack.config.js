const bodyParser = require("body-parser");
const fs= require('fs');
const proxyMiddleware= require("http-proxy-middleware");
const cookieParser = require("cookie-parser")
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
        var proxy = proxyMiddleware('/api', {
          target: 'http://localhost:8080'
       });
        app.use(proxy);
        app.use(bodyParser.json());
        app.use(cookieParser())
        app.use('/admin/',(req,res,next)=>{
          if (req.cookies['JSESSIONID'] === undefined){
            res.redirect('/login');
          } else{
            next();
          }
        })
        app.post("/download/img",(req,res)=>{
          var filePath= req.body.filePath;
          console.log(filePath);
          if(filePath!=null|| filePath=="null"){
            fs.readFile(filePath,'utf-8',(err,data)=>{
              if(err){
                res
                  .status(200)
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
          }
          else{
            res
                  .status(200)
                  .contentType("application/json")
                  .json({"imgData":null});
          }

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
          target:'http://localhost:8080',
          changeOrigin: true
        }
      },
      historyApiFallback: true,
      contentBase: './'
    }
  };
