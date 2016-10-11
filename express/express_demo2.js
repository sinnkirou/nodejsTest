var express= require('express');
var app=express();

app.get('/',function(req,res){
  console.log('homepage get req');
  res.send('Hello Get');
});

//post req
app.post('/',function(req,res){
  console.log('homepage post req');
  res.send('Hello Post');
});

// /del_user page response
app.delete('/del_user',function(req,res){
  console.log('/del_user response DELETE req');
  res.send('delete page');
})

// /list_user page GET req
app.get('/list_user',function(req,res){
  console.log('.lsit_user GET req');
  res.send('user list page');
})

// abcd,abxcd,ab123cd, wait the response of GET req
app.get('/ab*cd',function(req,res){
  console.log("/ab*cd GET req");
  res.send('match');
})

var server =app.listen(8081,function(){
  var host=server.address().address;
  var port=server.address().port;

  console.log('应用实例，访问地址为http://%s:%s',host,port);
})
