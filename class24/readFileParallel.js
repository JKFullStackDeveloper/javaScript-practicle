let fs = require("fs");

let file1Promise = fs.promises.readFile("f1.txt");
let file2Promise = fs.promises.readFile("f2.txt");
let file3Promise = fs.promises.readFile("f3.txt");


// file1Promise.then(function(data){
//     console.log(""+data);
// })

// file2Promise.then(function(data){
//     console.log(""+data);
// })

// file3Promise.then(function(data){
//     console.log(""+data);
// })


function cb(data){
    console.log(""+data);
}

function errorCb(error){
    console.log(error);
}

file1Promise.then(cb);
file2Promise.then(cb);
file3Promise.then(cb);

file1Promise.catch(errorCb);
file2Promise.catch(errorCb);
file3Promise.catch(errorCb);