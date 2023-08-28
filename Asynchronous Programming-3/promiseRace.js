let fs = require("fs");

let f1promise=fs.promises.readFile("f1.txt");
let f2promise=fs.promises.readFile("f2.txt");
let f3promise=fs.promises.readFile("f3.txt");

let racePromise = Promise.race([f1promise,f2promise,f3promise]);

// Promise.race will give the output from promise which one is clear the pending state first
// either it is resolve or rejected.

racePromise.then(function(data){
    console.log(data+"");
})