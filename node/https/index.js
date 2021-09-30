var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var cookieParser = require('cookie-parser');

//同步读取密钥和签名证书
var options = {
    key:fs.readFileSync('./server.key'),
    cert:fs.readFileSync('./server.crt')
}

var app = express();
app.use(cookieParser());
var httpsServer = https.createServer(options,app);
var httpServer = http.createServer(app);

app.get('/',function(req,res,next){
  var cookies = JSON.stringify(req.cookies);
  console.log('cookies:', cookies);
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  res.send('Hello Express+https');
});
//https监听3000端口
httpsServer.listen(3000);
//http监听3001端口
httpServer.listen(3001);