// const a = [1,3,5,7];
// console.log(a);   // [ 1, 3, 5, 7 ]   
// a.push(9);   // we can change the const value in reference data type like array and object
// console.log(a);  //[ 1, 3, 5, 7, 9 ]


// ********** Pass By Value : no changes in original one. A new copy will be created. **************

// function fxn(num){
//     console.log("inside function before change -> " + num)
//     num= 15;
//     console.log("inside function after change -> " + num)
// }

// let a = 10;

// console.log("outside function -> " + a);
// fxn(a)
// console.log("outside function -> " + a); // no changes in original value

function fxn(obj){
    obj.city= "Pune"; // change will persist in the original c object as both are referencing to the same address.
    console.log(obj);
    obj = {           // new created object will point to the different address in heap memory and change will not persist in the original object.
        name:"juned"
    }
    console.log(obj);
}
let a = {
    name : "jk"
}
console.log(a);
fxn(a);  // reference type -  call by sharing    -- it will pointing to the same address in memory heap
console.log(a);