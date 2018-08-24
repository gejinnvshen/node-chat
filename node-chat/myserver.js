/*
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  fs.readFile('myindex.html','utf-8',function(err,data){
    res.end(data);

  })
});
var io = require('socket.io')(server);   //注意：服务器server要挂载在导入的socket.io框架上.我们通过传入 http （HTTP 服务器） 对象初始化了 socket.io 的一个实例。 然后监听 connection 事件来接收 sockets， 并将连接信息打印到控制台。

io.on('connection',function(socket){
  console.log('用户连接上了')
  socket.on('chatMessage',function(msg){
    console.log('mess' + msg);
    io.emit('chatMessage',msg);
    console.log('fasong')
  });

})

server.listen(5000,function(){
  console.log("链接上了服务器5000")
})*/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/myindex.html');
});

io.on('connection',function(socket){
  console.log('用户连接上了')
  socket.on('chatMessage',function(msg){
    console.log('mess' + msg);
    io.emit('chatMessage',msg);
    console.log('fasong')
  });

})

http.listen(5000,function(){
  console.log("链接上了服务器5000")
})


