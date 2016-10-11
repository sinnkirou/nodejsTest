var http=require('http');

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
res.write('Hello http');
res.end();
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
