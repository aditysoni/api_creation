const http = require("http");   // requiring the http module 
const fs = require("fs") ;      //used in accessing the file 

const server = http.createServer ((req,res)=> {
     
     if(req.url == "/"){
        res.end("hello from the home sides");

     } else if (req.url =="/about"){
        res.end("hello from the about side");
     }
     else {
    res.writeHead(404 , {"Content-type :text/html"}) ;
    res.end ("<h1> 404 error pages . Page does't exist </h1>");
     }
}) ;

server.listen(8000, "127.0.0.1" ,()=> {
    console.log( "listening to the network ");
});