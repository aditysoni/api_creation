// every file in nodejs is termed as module 
// node js fucntion wrapes up the variables inside of each module to make it private
// 
//  ---- below is grouping fucnction ....nodejs automatically uses it to make the variable private inside the modeule 


//IFEE ---immediately invoked fucntion expression -- data is private and this function gets called as soon as the page is refreshed --it doest't depends upon anything 

//(
//     function (name) 
//    {
        // const name = "aditya" ; (can remove this line )
//         console.log(name);
//     }
// ) ("aditya") ;

// anonymous fucntion --- which dont have name 


const http = require("http");   // requiring the http module 
const fs = require("fs") ;      //used in accessing the file 

const server = http.createServer ((req,res)=> {          // call back function is called and bydefault there are two parameters  request and response 
                                                        //request is the query and the response is the answer type from the server side to fullfill the need or solve the query 
res.end("hi from the other side , ur server is set up and good to go");  //gets showed on the page of your network 127.0.0.1

}) ;

server.listen(8000, "127.0.0.1" ,()=> {                  // u want to listen the request on port 8000
    console.log( "listening to the network ");

});