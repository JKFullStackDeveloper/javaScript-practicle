const { promises } = require("dns");
let fs = require("fs");

let f1promise = fs.promises.readFile("f1.txt");
let f2promise = fs.promises.readFile("f2.txt");
let f3promise = fs.promises.readFile("f3.txt");


let allPromise = Promise.all([f1promise,f2promise,f3promise]);

allPromise.then(function(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]+"");
    }
})

allPromise.catch(function(error){
    console.log(error);
})

// using async await

// (async function(){
//     try{
//         let dataArr = await allPromise;
//         for(let i=0;i<dataArr.length;i++){
//             console.log(dataArr[i]+"");
//         }
//     }catch(error){
//         console.log(error);
//     }
// })()






