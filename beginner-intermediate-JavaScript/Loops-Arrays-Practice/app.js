/*
* Loops: for, while, do..while
* */

/*
* for loop
* for(initialization, condition, afterthought){
* statement block
* }
* while loop
* while(condition){
* statement}
* */


// let i = 0;
//
// while(i < 5){
//     console.log(i);
//     i++;
// }
//
// for(let y = 0; y < 4; y++){
//     console.log(y);
// }

// let sum = 0;
// for(let i = 1; i < 5; i++){
//     sum += i;
//     console.log(sum);
// }
/*
// Define the number of rows and columns
const rows = 20;  // number of vertical steps
const leftColumn = 3;  // how many '.call' per row in left column
const rightColumn = 3; // how many '.call' per row in right column
const spaceBetween = 20; // spaces between left and right column

for (let i = 0; i < rows; i++) {
    // Left side
    let left = "";
    for (let j = 0; j < leftColumn; j++) {
        left += ".call ";
    }

    // Right side
    let right = "";
    for (let k = 0; k < rightColumn; k++) {
        right += ".call ";
    }

    // Print left + spaces + right
    console.log(left + " ".repeat(spaceBetween) + right);
}
*/


//
// let i = 0;
// let j = 10;
// checkIandJ: while (i < 4) {
//     console.log(i);
//     i += 1;
//     checkJ: while (j > 4) {
//         console.log(j);
//         j -= 1;
//         if (j % 2 === 0) {
//             continue;
//         }
//         console.log(j, "is odd.");
//     }
//     console.log("i =", i);
//     console.log("j =", j);
// }
//
// function dumpProps(obj, objName) {
//     let result = "";
//     for (const i in obj) {
//         result += `${objName}.${i} = ${obj[i]}<br>`;
//     }
//     result += "<hr>";
//     return result;
// }
//
// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log("Walking east one step");
// }
//
// const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const a = [x, x, x, x, x];
//
// for (let i = 0, j = 9; i <= j; i++, j-- ){
//     console.log(`a[${i}][${j}] = ${a[i][j]}`);
// }
/*
let years = [];
console.log(years["2"] !== ["02"]);

const fruits = [];
fruits.push("Banana", "Watermelon","Oranges");

// console.log(fruits);
// console.log(fruits.length);

fruits[5] = "Mango";
console.log(fruits[5]);
console.log(Object.keys(fruits));
console.log(fruits.length);
fruits.length = 10;
console.log(fruits)
console.log(fruits.length);
console.log(fruits[8]);
// Array Object
const students = [
    {
        name: "John",
        age: 32
    },
    {
        name: "January",
        age: 42
    }
];
console.log(students);


// For Loop
for(let i = 0; i < 3; i++){
    console.log("This is for Loop:", i);
}

const numbers = [10, 20, 30, 40];

for(let i = 0; i < numbers.length; i++ ){
    console.log(numbers[i]);
}

// for ... of
for(num of numbers){
    console.log('This is for...of loop', num);
}

// While Loop
let count = 0;
while(count < 5){
    console.log("This is index:", count);
    count++;
}

// Do While Loop

let x = 5;

do{
    console.log("This is do while loop:", x);
    x++;
}while(x < 5);

let age;

do {
    age = prompt("Enter your age: ");
}while(isNaN(age));
console.log("thanks");

let playAgain;

do{
    console.log("Play the game");
    playAgain = confirm("Are you sure?");
} while(playAgain);
*/

// Array with function


/*
const myArr = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(myArr([5, 10, 15]));

// const myFruits = () => {
//     const myList = [
//         {name: "banana", quantity: 21,},
//         {name: "banana2", quantity: 22},
//         {name: "banana3", quantity: 23}
//     ];
//     for(let fruit of myList){
//         console.log("fruit is: " + fruit.name + " " + fruit.quantity);
//     }
// }
// myFruits();

const showFruits = (list) => {
    for (let fruit of list) {
        console.log("Fruit:", fruit);
    }
}

showFruits(["apple", "banana", "mango"]);
*/

/*
* ===========================       TASKS      ==============================
* 1. Number Loops
* Print numbers 1 → 20 using for and while
* Print only even numbers
* Sum numbers 1 → N (ask user for N)
* */
/*
for(let i = 1; i <= 20; i++){
    console.log("The numbers from 1 to 20: ", i);

    if(i %2 === 0){
        console.log("This is even number: ", i)
    }
}


let num = parseInt(prompt("enter a number: "));
let sum = 0;
let i = 1;
while(i <= num){
    sum += i;
    i++;
}
console.log(`The sum of those numbers are: `, sum)
*/


/*
* 2. Array Practice
*Create an array of 5–10 numbers
*Calculate sum, average
*Find max & min
*Add and remove elements (push, pop, shift, unshift)
* */


const calculateArr = (label, arr) => {
    let sum = 0;
    let max = arr[0];
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    let average = sum / arr.length;
    console.log(`${label}: sum: ${sum}, average: ${average}, max: ${max}, min: ${min}`);
    return { sum, average, min, max };

}
let myArr = [5, 6, 7, 8, 9, 10];
calculateArr(`This is for final result`, myArr);
myArr.push(11);
calculateArr(`This is for push`, myArr);
myArr.pop();
calculateArr(`This is for pop`, myArr);
myArr.shift();
calculateArr(`This is for shift`, myArr);
myArr.unshift(2);
calculateArr(`This is for unshift`, myArr);

/*
* 3. Shopping Cart Array
*Array of items with prices
*Calculate total price
*Apply discount (>100 → 15% off)
* */

let items = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

const calculateTotal = (price) => {
}





