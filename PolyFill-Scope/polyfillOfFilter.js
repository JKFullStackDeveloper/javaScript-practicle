let myArr = [1,2,3,4,5,6,7,8];
console.log(myArr);

// let filteredArr = myArr.filter(function(ele){
//     return ele%2==0;
// })

// console.log(filteredArr);



// will create polyfill of filter named myFilter.

Array.prototype.myFilter = function(cb){
    // console.log(this.length);
    let newArr = [];
    for(let i=0;i<this.length;i++){
        let ele = this[i];
        if(cb(ele)){
            newArr.push(ele);
        }
    }
    return newArr;
}


let evenArr = myArr.myFilter(function(ele){
    return ele%2==0;
})
console.log("Even Number " , evenArr);

let oddArr = myArr.myFilter(function(element){
    return element%2!=0;
})
console.log("Odd Number " , oddArr);