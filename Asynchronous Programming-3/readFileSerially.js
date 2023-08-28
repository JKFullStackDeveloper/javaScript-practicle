let fs = require("fs");

async function readAllFileData(){
    let file1 = await fs.promises.readFile("f1.txt");
    let file2 = await fs.promises.readFile("f2.txt");
    let file3 = await fs.promises.readFile("f3.txt");
    console.log(""+file1);
    console.log(""+file2);
    console.log(""+file3);
    // return file1;
}

 readAllFileData();
// let res = readAllFileData();

// console.log(res);  // Promise { <pending> }

// res.then(function(f1data){
//     console.log(f1data+"");   // I am file one data
// })