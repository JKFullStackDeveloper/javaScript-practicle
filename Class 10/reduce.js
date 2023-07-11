let arr = [1,3,8,5,9];

// Sum of Array without using Reduce Function

// function sum(arr){
//  let val = 0;
//  for(let i=0; i<arr.length;i++){
//     val = val + arr[i];
//  }
//  return val;
// }
// let sumofarray = sum(arr);
// console.log(sumofarray);


// Sum of Array using Reduce Function

let sumOfArray = arr.reduce(function(acc,ele){
    return acc=acc+ele;
},0);   // second argument in reduce function is initial value of accumulator. if we dont pass it will take first element of array.
console.log(sumOfArray);


// Sum of Array using Reduce Function with Arrow Function
let sumarray = arr.reduce((acc,ele)=>acc+=ele,0)
console.log(sumarray);