const http = require("http") ;
const fs = require("fs") ;

const server = http.createServer (( req ,res =>{
    
    if(req.url == "/")
   { res.end("hello from the home page ");}
    else if(req.url == "/about")
    {res.end("hello world this is about us") ;} // routing the page to the aboout page 
    else if(req.url == "/contact")
    {res.end("hello world this is our contact") ;} // gives the desired info of contact when
   
    else                                           //if some not exixting url is enterd
    {res.writeHead(404);                              //status will be showed 404 which is erro and not 200(which gets written when succesful compilation is executed)
   
    res.end("<h1>page does't exist </h1>");}        //h1 makes it clear that the content is not from doc but is html content

}));

 server.listen(8000 , "127.0.0.1", () => {
    console.log("listening to the port no 8000");
    
 }) ;
