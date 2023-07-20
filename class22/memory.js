
//  Premetive (call by value)

// let a = 10;
// let b = a;
// b=30;
// console.log(a);   // 10
// console.log(b);   // 30

//  reference  (call by reference)

// let obj1 = {
//     name: "Juned"
// }

// let obj2= obj1;

// obj2.name = "JK";

// console.log(obj1);    // { name: 'JK' }
// console.log(obj2);    // { name: 'JK' }

// let obj1 = {
//     name : "Juned"
// }

// let obj3 = {
//     name : "JK"
// }

// let obj2 = obj1;

// obj2.name="SJK";

// obj2 = obj3;

// obj3.name = "SK";

// console.log(obj1);     // { name: 'SJK' }
// console.log(obj2);     // { name: 'SK' }
// console.log(obj3);    // { name: 'SK' }


// *************************** Shallow copy Vs Deep Copy ***************************

// Shallow copy :- 

// let obj1 = {
//     name:"Juned",
//     age: 32
// }

// // let obj2 = Object.assign({},obj1);     // Shallow Copy
//    let obj2 = {...obj1};                  // Shallow Copy

// obj2.name="JK";

// console.log(obj1);   // { name: 'Juned', age: 32 }
// console.log(obj2);   // { name: 'JK', age: 32 }

// Problems in shallow copy  --> next level object it will create same reference address for both object.

// Example:

// let obj1 = {
//     name: "Juned",
//     age:32,
//     address : {
//         city: "Pune",
//         Pin: 411048
//     }
// }
// let obj2 = {...obj1};

// obj2.name = "JK";
// obj1.address.city = "Talaja";   // change both object city name as address object is pointing to same reference.

// console.log(obj1);  // { name: 'Juned', age: 32, address: { city: 'Talaja', Pin: 411048 } }
// console.log(obj2);  // { name: 'JK', age: 32, address: { city: 'Talaja', Pin: 411048 } }


// Deep Copy

// let obj1 = {
//         name: "Juned",
//         age:32,
//         address : {
//             city: "Pune",
//             Pin: 411048
//         }
//     }

// console.log("Object1 " , obj1);

// let stringObj = JSON.stringify(obj1);
// let obj2 = JSON.parse(stringObj);
    // or
// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.name="JK";
// obj2.address.city="Talaja";
// obj2.address.Pin=364140;
// console.log("Object2 " , obj2);


let obj = {
    name : "Adam",
    friends : ["Alex","Tim","Carl"],
    address : {
        city : "Delhi",
        pinCode : 12345,
        bornPlace : {
            village : "LA",
            pinCode : 789654
        }
    }
}

let obj5 = obj;         // copy

let obj7 = {...obj};    // shallow copy

let obj8 = JSON.parse(JSON.stringify(obj));   // deep copy

obj8.friends = ["No one"]
obj8.address.bornPlace.village = "don't know"

obj7.address.city = "LA"
obj7.name = "Alex"

obj5.name = "Hales";
obj5.address.city = "New York"


// console.log(obj);    
// console.log(obj5);
// console.log(obj7);
console.log(obj8);