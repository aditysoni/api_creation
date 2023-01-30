const http = require("http") ;
const fs = require("fs");
const server = http.createServer ((req,res )=> 
{    
    fs.readFile('${__dirname}/userapi/usage.json ' , "utf-8" ,      
    (err,data) => {
        console.log(data) ;
        const objData = JSON.parse(data) ;           //returns a java script object which can be accessed easily 
        res.end(objData[2].name);                   // printing the name of 2 no of persons name 
    
    });
 
    
    
    
    if(req.url == "/"){
        res.end("hello from the home sides");

     } else if (req.url =="/about")
     {
       res.writeHead(200 , {"content-type " : "application/json"});        // it will make clear that the api is called only once means whenever the data is called it doest happen ki api is called everytime a request is made 
       res.end(objData[2].name);
    }   
     else {
    // res.writeHead(404 , {"Content-type :text/html") ;
    res.end ("<h1> 404 error pages . Page does't exist </h1>");
     }
      //__dirname tells the address of the main directory 
     //data is reqersted from the given file
     //utf-8 is used so that buffer data na mile 
   

    
 } ) ; 
 

  server.listen (8000, "127.0.0.1" , () => {
  console.log("listening");
 
//   console.log(data);

});