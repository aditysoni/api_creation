
//created an object
const biodata = {
    name : "aditya" ,
    age : 21 ,
    college : "lnmiit" ,
} ;
console.log(biodata.age);

const jsondata = JSON.stringify(biodata);  // to change the data into json format 

console.log(jsondata.age);   //will show error , beacuse not a right way to display data in json format 

 