let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");
// console.log(f1Promise);

// f1Promise.then(function(data){
//     console.log(""+data);
//     let f2Promise = fs.promises.readFile("f2.txt");
//     return f2Promise;
// }).then(function(data){
//     console.log(""+data);
//     let f3Promise = fs.promises.readFile("f3.txt");
//     return f3Promise;
// }).then(function(data){
//     console.log(""+data);
// })

// f1Promise.then(function(data){
//     console.log(""+data)
//     let f2Promise = fs.promises.readFile("f2.txt")
//     .then(function(data){
//         console.log(data+"");
//         let f3Promise = fs.promises.readFile("f3.txt")
//         .then(function(data){
//             console.log(data+"");
//         })
//     })
// })

// Promise Chaining

// f1Promise.then(function(data){
//     console.log(""+data);
//     return fs.promises.readFile("f2.txt");
// }).then(function(data){
//     console.log(""+data);
//     return fs.promises.readFile("f3.txt");
// }).then(function(data){
//     console.log(""+data);
// })

// Async Await

async function readMyFile(){
    let myfile1 = await f1Promise;
    console.log(myfile1+"");
    let myfile2 = await f2Promise;
    console.log(myfile2+"");
    let myfile3 = await f3Promise;
    console.log(myfile3+"");
}

readMyFile()

