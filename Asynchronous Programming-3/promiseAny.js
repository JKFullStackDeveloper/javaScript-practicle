const { error } = require("console");
let fs = require("fs");

let f1promise = fs.promises.readFile("f1.txt");
let f2promise = fs.promises.readFile("f2.txt");
let f3promise = fs.promises.readFile("f3.txt");

let anyPromise = Promise.any([f1promise,f2promise,f3promise]);

// Promise.any will return promise which is resolved first out of all given promises
anyPromise.then(function(data){
    console.log(data+"");
})


// will go inside a catch when all promise gets rejected
anyPromise.catch(function(error){
    console.log(error);
})