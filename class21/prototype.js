// let obj = {
//     name : "Juned",
//     age: 29,
//     sayHello: function(){
//         console.log("From Normal Object ", this.name)
//     }
// }

// console.log(obj);

// function Car(name,price){
//     this.name = name;
//     this.price = price;
    
//     // this.sayHello= function(){
//     //     console.log("From Constroctor Object ", this.name)
//     // }
// }

// Car.prototype.break = function(){
//     console.log(`Break has been applied to ${this.name}`);
// }

// Car.prototype.sayHello = function(){                           // Prototype Inheritance in constroctor object
//     console.log("I will purchase " , this.name);
// }

// let car1 = new Car("BMW",2500000);
// console.log(car1);
// car1.sayHello();
// car1.break();

// let car2 = new Car("Audi",3500000);
// console.log(car2);
// car2.sayHello();

// let car3 = new Car("Bugati",7500000);
// console.log(car3);
// car3.sayHello();


class Car{
    constructor(name,price,color){
        this.name = name;
        this.price = price;
        this.color = color;
    }
    // break= function(){
    //     console.log(`Break applied to ${this.name}`);
    // }
}

Car.prototype.break = function(){                               // Prototype Inheritance in class object
    console.log(`Break has been installed into ${this.name}`);
}

let car1 = new Car("BMW",2500000,"Red");
console.log(car1);
car1.break();

let car2 = new Car("Audi",4500000,"Black");
console.log(car2);
car2.break();

let car3 = new Car("Ferrari",9500000,"Yellow");
console.log(car3);
car3.break();