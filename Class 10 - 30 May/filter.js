let arr = [1,2,4,57,8,9,345,12,79,987];

// output : [2,4,8,12]

// Filter Array without using Filter Function

// function even(arr){
//     let filteredArray = [];
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]%2==0){
//             filteredArray.push(arr[i])
//         }
//     }
//     return filteredArray;
// }

// let filterEven = even(arr);
// console.log(filterEven);


// Filter Array using Filter Function

// let result = arr.filter(function(val){
//     return val%2==0;
// })

// console.log(result);

// Filter Array using Filter Function with Arrow Function

// let result = arr.filter((val)=>val%2==0)
// console.log(result);


// Homework
// take positive transaction only

const transaction = [1000,3000,4000,2000,-898,3800,-4500];

let positiveTrans = transaction.filter((amt)=>amt>0)
console.log(positiveTrans);