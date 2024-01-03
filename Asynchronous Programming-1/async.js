
// function fxn(){
//     let a = 50;
//     console.log(a);                         
// }

// setTimeout(function(){
//     console.log("I am async");
// },1000);


// fxn();

// let b = 20;
// console.log(b);

// let c = 30;
// console.log(c);           // output ->  50 20 30 I am async


// function fxn(cb){
//     console.log("I am fxn");
//     cb();
// }

// function gxn(){
//     console.log("I am gxn");
// }

// fxn(gxn);  
//Output :-  // I am fxn  
            //I am gxn


// console.log("1");

// setTimeout(function cb1(){
//     console.log("2");
// },0);

// console.log("3");     // 1 3 2


// console.log("1");

// setTimeout(function cb1(){
//     console.log("2");
// },0);

// setTimeout(function cb2(){
//     console.log("3");
// },1000)

// console.log("4");     // 1 4 2 3


// console.log("1");

// setTimeout(function cb1(){
//     console.log("2");
// },2000);

// setTimeout(function cb2(){
//     console.log("3");
// },1000)

// console.log("4");   // 1 4 3 2


// console.log("1");

// setTimeout(function cb1(){
//     console.log("2");
// },0);

// setTimeout(function cb2(){
//     console.log("3");
// },0)

// console.log("4");   // 1 4 2 3


// function fxn(){
//     setTimeout(()=>{
//         console.log(i);
//     })
//     let i=10;
// }

// fxn();   // 10

// setTimeout does not guarantee of execution of function after exactly given delay.
// it can take more time depending on if call stack is empty.
// But it does guarantee to not execute before the given delay.

//  see below example : 
//  it will take more than 15 second to print cb1 as for loop taking time and call stack was not empty.

setTimeout(function cb1(){
    console.log("2");
},3000);

for (let i=0;i<100000;i++){
    console.log(i);
}

setTimeout(function cb2(){
    console.log("1")
},0)                        // i, 2, 1

