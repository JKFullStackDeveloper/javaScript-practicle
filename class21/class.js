class Person{
    constructor(name,age){    //constructor method gets invoked as soon as object of class is created.
                              // it will register all properties your class will have
        this.name = name;     
        this.age = age;
    }

    sayHello() {
        console.log(`Hello from ${this.name}`);
    }
}

// let person1 = new Person("Juned",32);
// console.log(person1);
// person1.sayHello();

//Inheritance -> The process of one class taking properties from other class known as inheritance

class Student extends Person{
    constructor(name,age,batch,score){     
         
        super(name,age);      // we are invoking the constructor method of parent
        this.batch = batch;
        this.score = score;
    }
}

// let student1 = new Student("Juned",32,"April",100);
// console.log(student1);
// student1.sayHello();

class Teacher extends Student{
    constructor(name,age,batch,score,classStrength){
        super(name,age,batch,score);
        this.classStrength = classStrength;
    }
}

let teacher1 = new Teacher("Juned",32,"April-2023",100,25);
teacher1.sayHello();
console.log(teacher1);
