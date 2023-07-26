let fs = require("fs");


// Asynchronous

console.log("Before File Reading...");

let file1 = fs.readFile("f1.txt",function cb(error,data){
    if(error){
        console.log(error)
    }else{
        console.log("Data of file 1 -> "+ data);
    }
})

let file2 = fs.readFile("f2.txt",function cb2(error,data){
    if(error){
        console.log(error);
    }else{
        console.log("Data of file 2 -> " + data);
    }
})


let file3 = fs.readFile("f3.txt", function cb3(error,data){
    if(error){
        console.log(error);
    }else{
        console.log("Data of File 3 -> " + data);
    }
})
console.log("After File Reading...");
