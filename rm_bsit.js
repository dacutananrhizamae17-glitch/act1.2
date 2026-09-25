let studentName = "Dacutanan, Rhiza Mae";
let age = 19;
let course = "BSIT";

let numbers = [1, 2, 3];
let fruits = ["apple", "banana", "mango"];
let grades = [85, 90, 75];

let student = { name: "Rhiza Mae", section: "BSIT3A" };
let car = { brand: "Toyota", year: 2020 };

class Person {
    constructor(name, age) { 
        this.name = name;
        this.age = age;
    }
    introduce() { 
        console.log("Hi, I'm " + this.name);
    }
}

class Student extends Person { 
    constructor(name, age, course) { 
        super(name, age);
        this.course = course;
    }
    study() { 
        console.log(this.name + " is studying " + this.course);
    }
    introduce() { 
        console.log("Hi, I'm " + this.name + " from " + this.course);
    }
}

class Teacher extends Person { 
    teach() { 
        console.log(this.name + " is teaching.");
    }
}

class BankAccount {
    #balance = 0; 
    deposit(amount) { 
        this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
}


class SecureData {
    #secret = "hidden"; 
    revealSecret() {
        return this.#secret;
    }
}


function abstractExample() {
    console.log("This hides complex details.");
}


let person1 = new Person("Ana", 30);
let student1 = new Student("Yuri", 21, "BSCS");
let teacher1 = new Teacher("Mr. Cruz", 40);
let account1 = new BankAccount();

if (age > 18) {
    console.log(studentName + " is an adult.");
} else {
    console.log(studentName + " is not an adult.");
}

if (course === "BSIT") {
    console.log("Course is Information Technology.");
} else {
    console.log("Course is not Information Technology.");
}

if (grades[0] >= 80) {
    console.log("First grade is passing.");
} else {
    console.log("First grade is failing.");
}


for (let i = 0; i < numbers.length; i++) {
    console.log("Number: " + numbers[i]);
}

let j = 0;
while (j < fruits.length) {
    console.log("Fruit: " + fruits[j]);
    j++;
}

for (let grade of grades) {
    console.log("Grade: " + grade);
}


person1.introduce();
student1.introduce(); 
student1.study();
teacher1.teach();
account1.deposit(100);
console.log("Balance: " + account1.getBalance());
abstractExample();
