/* Storing User Information in Variables and printing them */ 

let firstName = "Kummari";
let lastName = "Jaya Krishna";
let age = 20;
const favouriteColor = "blue";
const isStudent = true;

console.log("First Name : ",firstName);
console.log("Last Name : ",lastName);
console.log("Age : ",age);
console.log("Favourite Color : ",favouriteColor);
console.log("You are student : ",isStudent);


/* Undefined Variables */

let myVariable;
console.log(myVariable);
console.log(typeof myVariable);
myVariable = 42;
console.log(myVariable);
console.log(typeof myVariable);

/* Variable Types Checking using typeof operator */

let mystery1 = 42;
let mystery2 = "42";
let mystery3 = true;
let mystery4 = null;
let mystery5 = undefined;
let mystery6 = 3.14;
let mystery7 = 12n;
console.log(mystery1,typeof mystery1);
console.log(mystery2,typeof mystery2);
console.log(mystery3,typeof mystery3);
console.log(mystery4,typeof mystery4);
console.log(mystery5,typeof mystery5);
console.log(mystery6,typeof mystery6);
console.log(mystery7,typeof mystery7);

/* Type Conversion */

let numberString = "123";
let normalNumber = 456;
let boolValue = true;

console.log(numberString," is converted into number ",Number(numberString));
console.log(normalNumber," is converted into string ",String(normalNumber));
console.log(boolValue," is converted into number ",Number(boolValue));

/* Null vs Undefined */

let var1 = null;
let var2 = undefined;
console.log(var1 == var2);
console.log(var1 === var2);

/* Counter Game */

let score = 0;
score = score + 10;
score = score - 5;
score = score * 2;
console.log(score);

/* Global vs Local */

let globalVar = "I'm Global";

function test(){
    let localVar = "I'm Local";
    console.log(globalVar);
    console.log(localVar);
}

test();

console.log(globalVar);
// console.log(localVar);

/* Variable Shadowing */

let name = "Global";

function change(){
    let name = "Local";
    console.log(name);
}

change();

console.log(name);

/* Block Level Scope */

let x = 1;

if(true){
    let x = 2;
    console.log(x);
}

console.log(x);

/* Personal Introduction Using Template Literals */

let fName = "Kummari";
let lName = "Jaya Krishna";
let a = 20;
let city = "Kurnool";

console.log(`Hi,I'm ${fName} ${lName}, I'm ${a} years old and I live in ${city}.`);

/* Math with Templates */

let num1 = 15;
let num2 = 25;

console.log(`The sum of ${num1} and ${num2} is ${num1+num2}`);

/* User Profile */

let userName = "Jaya";
let email = "jaya@.com";
let ag = 20;
let membershipStatus = true;
let accountCreationDate = new Date().toDateString();
let lastLoginDate = null;

console.log(userName,email,ag,membershipStatus,accountCreationDate,lastLoginDate);

/* Swapping Without Third Variable */

let a1 = 5;
let b1 = 10;

console.log("Before Swapping A = ",a1," B = ",b1);

b1 = a1 + b1;
a1 = b1 - a1;
b1 = b1 - a1;

console.log("After Swapping A = ",a1,"B = ",b1);


/* Time Converter */

let totalSeconds = 3661;

let hours = Math.floor(totalSeconds/3600);
let remainingSeconds = Math.floor(totalSeconds%3600);
let minutes = Math.floor(remainingSeconds/60);
let seconds = remainingSeconds%60;

console.log(hours," Hours ",minutes," Minutes ",seconds," Seconds ");
