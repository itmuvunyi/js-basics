/*
* Function declaration vs arrow functions

Parameters + return values

Task: Build a function to calculate a shopping bill + discount.
* */
// const greet = (name) => `Hello ${name}`;
// console.log(greet('Innocent'));

// function greeting(count){
//     if(count <= 0){
//         return 'Done';
//     }
//     console.log(`Hello`);
//     return greeting(count-1);
// }
// greeting(0);

// function add(a, b) {
//     console.log(a + b); // prints 5, but nothing is returned
// }
//
// let sum = add(2, 3); // sum is undefined
// console.log(sum);    // prints undefined

// Writing functions

// function add(a, b){
//     return a + b;
// }
//
// console.log(add(2,4));

//  To calculate rectangle area

// let width = Number(prompt("Enter rectangle width: "));
// let height = Number(prompt("Enter rectangle height: "));
//
// function rectArea(width, height) {
//     return  width * height;
// }
//
// console.log(`The area is ${rectArea(width, height)}cm`);

/*
* Temperature converter
Celsius → Fahrenheit
F = C * 1.8 + 32
* */
// function tempConverter(celsius){
//     return celsius * 1.8 + 32;
// }
// let temp = prompt("enter temperature into celsius: ");
// let F = tempConverter(temp);
//
// console.log(`${temp}°C is equal to ${F}°F`);

/*
* Main Challenge – Shopping Bill Calculator
* input total price
* check price is greater than 50 then discount 10%
* Return final price
* Print: - Original price -Discount amount -Final price
* */

// let totalPrice = Number(prompt("Enter a total price: "));
//
// function billCalculator(price) {
//     let discount = 0;
//     let finalPrice = price;
//     if (price > 50) {
//         discount = totalPrice * 0.10;
//         finalPrice = price - discount;
//         console.log(`The discount amount is: ${discount}`);
//     }else{
//         console.log(`No discount applied`);
//     }
//     return finalPrice;
// }
// let finalPrice = billCalculator(totalPrice);
// console.log(`The original price is ${totalPrice}`);
// console.log(`The final price is ${finalPrice}`);

// BONUS - Create a Utility Toolkit
// function max(a, b){
//     return Math.max(a, b);
// }
// console.log(max(2, 4));
//
// function min(a, b){
//     return Math.min(a, b);
// }
//
// console.log(min(6, 5));
//
// function isEven(num1, num2){
//     return num1 %2=== 0 && num2 %2=== 0;
// }
//
// console.log(isEven(4,4));

// Finally [ Profile - Formatter ]

let name = prompt('Enter your name: ');
let age = prompt('Enter your age: ');
let  country = prompt('Enter your country name: ');

function showUserProfile(){
    console.log(`Hi ${name}! you're ${age} years old and your country is ${country}.`);
}
showUserProfile();


