// let obj = {
//     name : "Juned",
//     age: 29,
//     sayHello: function(){
//         console.log("From Normal Object ", this.name)
//     }
// }

// console.log(obj);

function Car(name,price){
    this.name = name;
    this.price = price;
    
    // this.sayHello= function(){
    //     console.log("From Constroctor Object ", this.name)
    // }
}

Car.prototype.break = function(){
    console.log(`Break has been applied to ${this.name}`);
}

Car.prototype.sayHello = function(){                           // Prototype Inheritance
    console.log("I will purchase " , this.name);
}

let car1 = new Car("BMW",2500000);
console.log(car1);
car1.sayHello();
car1.break();

let car2 = new Car("Audi",3500000);
console.log(car2);
car2.sayHello();

let car3 = new Car("Bugati",7500000);
console.log(car3);
car3.sayHello();