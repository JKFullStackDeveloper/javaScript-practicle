let fs = require("fs");


// console.log("Before");

// let fileData = fs.readFile("f1.txt",function(error,data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(""+data);
//     }
// })

// console.log("After");

// **************************************************************

 console.log("Before");
let myPromiseFile = fs.promises.readFile("f1.txt");

// console.log(myPromiseFile);   // Promise { <pending> }

myPromiseFile.then(function(data){
    console.log(""+data);                   // I am file 1 data
})

myPromiseFile.catch(function(error){
    console.log(error);
})


console.log("After");