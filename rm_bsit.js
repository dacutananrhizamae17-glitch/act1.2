// Variables (3)
let studentName = "Ortiz_YuriJoseph_BSCS4A";
let age = 21;
let course = "BSCS";

// Arrays (3)
let numbers = [1, 2, 3];
let fruits = ["apple", "banana", "mango"];
let grades = [85, 90, 75];

// Object Literals (2)
let student = { name: "Yuri", section: "BSCS4A" };
let car = { brand: "Toyota", year: 2020 };

// Classes (4) + Constructors (2) + Methods (5)
class Person {
    constructor(name, age) { // Constructor 1
        this.name = name;
        this.age = age;
    }
    introduce() { // Method 1
        console.log("Hi, I'm " + this.name);
    }
}

class Student extends Person { // Inheritance 1
    constructor(name, age, course) { // Constructor 2
        super(name, age);
        this.course = course;
    }
    study() { // Method 2
        console.log(this.name + " is studying " + this.course);
    }
    introduce() { // Polymorphism (override) Method 3
        console.log("Hi, I'm " + this.name + " from " + this.course);
    }
}

class Teacher extends Person { // Inheritance 2
    teach() { // Method 4
        console.log(this.name + " is teaching.");
    }
}

class BankAccount {
    #balance = 0; // Encapsulation 1 (private property)
    deposit(amount) { // Method 5
        this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
}

// Encapsulation (2)
class SecureData {
    #secret = "hidden"; // private
    revealSecret() {
        return this.#secret;
    }
}

// Abstraction (1)
function abstractExample() {
    console.log("This hides complex details.");
}

// Objects (4)
let person1 = new Person("Ana", 30);
let student1 = new Student("Yuri", 21, "BSCS");
let teacher1 = new Teacher("Mr. Cruz", 40);
let account1 = new BankAccount();

// Conditionals (3)
if (age > 18) {
    console.log(studentName + " is an adult.");
} else {
    console.log(studentName + " is not an adult.");
}

if (course === "BSCS") {
    console.log("Course is Computer Science.");
} else {
    console.log("Course is not Computer Science.");
}

if (grades[0] >= 80) {
    console.log("First grade is passing.");
} else {
    console.log("First grade is failing.");
}

// Loops (3)
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

// Testing methods
person1.introduce();
student1.introduce(); 
student1.study();
teacher1.teach();
account1.deposit(100);
console.log("Balance: " + account1.getBalance());
abstractExample();
