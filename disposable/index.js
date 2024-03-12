function showImage() {
  document.getElementById("myimage").style.display = "flex";
}
function changecolor() {
  document.getElementById("appear").style.color = "red";
  document.getElementById("normal").style.colour = "black";
}

//console.log("Hello worlrd");

// alert("Hi, would you like to eat something nice for dinner");

// let food = prompt("what");
// console.log(food);

// var Frontend = "Adebayo";
// console.log(Frontend);

// const Animal = "Lion";
// console.log(Animal);

// let person = {
//   firstName: "Joshua",
//   lastName: "Asaolu",
//   country: "Nigeria",
// };

// let cars = ["Fords", "Toyota", "Honda"];

// let num = 5;

// let cloth = "Ankara";

// console.log(
//   "my name is",
//   person.firstName,
//   "I drive a",
//   cars[1],
//   "and have about",
//   num,
//   cloth,
//   "dresses"
// );

// 1. Number Comparism:
// Write a program that prompts the user for two numbers and then prints a message starting whether the first number is greater than, less than, or equal to the second number.

// let firstNum = prompt();
// let secondNum = prompt();

// if (firstNum > secondNum) {
//   let message = alert("First number is greater than second number");
// } else if (firstNum < secondNum) {
//   let message = alert("First number is less than second number");
// } else {
//   let message = alert("First number is equal to second number");
// }

// Ternary Operators
// firstNum > secondNum
//   ? alert("First name is greater than second number")
//   : secondNum > firstNum
//   ? alert("Second number is greater than first number")
//   : alert("First number is equal to second number");

// String Comparism
//let email

// let x = alert(" x < 10 && y > 1");
// let y = 3;

//console.log(x);

let score = prompt();
function checkPassed(hasPassedMaths, hasPassedScience) {
  if (hasPassedMaths && hasPassedScience) {
    return true;
  } else {
    return false;
  }
}
let hasPassedMath = true;
let hasPassedScience = true;

console.log(checkPassed(hasPassedMaths, hasPassedScience));

function checkEligibleToVote(age) {
  return age >= 18 || legalResident;
}
console.log(checkEligibleToVote(20));

let legalResident = true;
console.log(checkEligibleToVote(18));

function isNonNegative(number) {
  if (typeof number !== "number") {
    throw new Error("Input is not a number");
  }

  return number >= 0;
}

console.log(isNonNegative(5));
