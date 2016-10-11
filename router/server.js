var http=require('http');
var url=require('url');

function start(route){
 function onRequest(req,res){
   var pathname=url.parse(req.url).pathname;
   console.log('Request for '+ pathname + ' received.');
   
   route(pathname);

   res.writeHead(200,{'COntent-Type':'text/plain'});
   res.write('Hello 23412312');
   res.end();
 }

 http.createServer(onRequest).listen(8888);
 console.log('server has started');
}

exports.start=start;
