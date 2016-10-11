var http=require('http');

function onRequest(req,res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello World");
  res.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
