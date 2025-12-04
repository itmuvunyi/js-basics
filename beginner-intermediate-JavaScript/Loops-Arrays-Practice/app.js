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


let i = 0;

while(i < 5){
    console.log(i);
    i++;
}

for(let y = 0; y < 4; y++){
    console.log(y);
}

let sum = 0;
for(let i = 1; i < 5; i++){
    sum += i;
    console.log(sum);
}
/**/
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




let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
    console.log(i);
    i += 1;
    checkJ: while (j > 4) {
        console.log(j);
        j -= 1;
        if (j % 2 === 0) {
            continue;
        }
        console.log(j, "is odd.");
    }
    console.log("i =", i);
    console.log("j =", j);
}

function dumpProps(obj, objName) {
    let result = "";
    for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}<br>`;
    }
    result += "<hr>";
    return result;
}

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
}

const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j-- ){
    console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
/**/
let years = [];
console.log(years["2"] !== ["02"]);

const fruits = [];
fruits.push("Banana", "Watermelon","Oranges");

console.log(fruits);
console.log(fruits.length);

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


// Array with function


/**/
const myArr = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(myArr([5, 10, 15]));

const myFruits = () => {
    const myList = [
        {name: "banana", quantity: 21,},
        {name: "banana2", quantity: 22},
        {name: "banana3", quantity: 23}
    ];
    for(let fruit of myList){
        console.log("fruit is: " + fruit.name + " " + fruit.quantity);
    }
}
myFruits();

const showFruits = (list) => {
    for (let fruit of list) {
        console.log("Fruit:", fruit);
    }
}

showFruits(["apple", "banana", "mango"]);


/*
* ===========================       TASKS      ==============================
* 1. Number Loops
* Print numbers 1 → 20 using for and while
* Print only even numbers
* Sum numbers 1 → N (ask user for N)
* */
/**/
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
    return { sum, average, max, min };

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
                    // With using for Loop
const calculateTotal = (prices) => {
    let itemsDiscount = [];

    for(let i = 0; i < items.length; i++){
        let item = prices[i];
        let discount = 0;
        if(item.price > 50) {
            discount = item.price * 0.10;
            console.log(`The discount for ${item.name}: ${discount}`);
        }else {
            console.log(`not applicable for ${item.name}`);
        }
        itemsDiscount.push({
            name: item.name,
            price: item.price,
            discount: discount
        });
    }
    return { itemsDiscount };
};
let items = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];
console.log("The result is: ", calculateTotal(items));

// With using .map() method instead loops

const calculateItems = (prices) => {
    return prices.map(item => {
        let discount = item.price > 50 ? item.price : 0;
        return {
            name: item.name,
            price: item.price,
            discount: discount
        };
    });
};

const items = [
    {name: 'Laptop', price: 1200 },
    {name: 'Mouse', price: 25 },
    {name: 'Keyboard', price: 75 }
];
console.log("The result: ", calculateItems(items));

/*
* 4. Loop + Function
*Function to check which numbers in an array are even
*Return new array with only even numbers
*/
 const checkNumbers = (numbers) => {
     return numbers.filter(number => number %2 === 0);
 }
 const arrNumbers = [1, 2, 3, 4, 5];
console.log("The result: ", checkNumbers(arrNumbers));

// Take the array below, double the values, filter out those less than 10, and sort them
// descending: [2, 5, 8, 10, 3]
const numbers = [2, 5, 8, 10, 3];
const doubleValues = (numbers) => {
    return numbers
    .map(number => number * 2)
    .filter(number => number > 10)
    .sort((a,b) => b-a)
};
console.log(doubleValues(numbers));
// Another way to do that:

const doubleValues2 = (numbers) => {
    console.log("this was our original array: ", numbers);
    const mapped = numbers.map(number=> number * 2);
    console.log("This is for mapping: ", mapped);
    const filtered = mapped.filter(number => number > 10);
    console.log("This is for filtered: ", filtered);
    const sorted = filtered.sort((a,b) => b-a);

    return { sorted };
}
console.log(doubleValues2(numbers));
/*
* 4.5 Bonus Challenge
*Ask user for 5 names → store in array → greet each
*Temperature converter: ask user for 3 readings → print hot/warm/cold for each
* */

/* Next Level
* 1. Functions & Logic Challenges
Discount & Tax Calculator
Input: price, discount %, tax %
Output: final price after discount + tax
Bonus: Make it reusable with a function calculateFinalPrice(price, discount, tax)
* */

/*
* 2. Palindrome Checker
Input: string from user
Output: true if palindrome, false otherwise
Hint: use .split(), .reverse(), .join()
* */
/*
* 3. Factorial Function
Recursive and iterative versions
Input: number
Output: factorial of number
* */
/*
* 4. FizzBuzz Challenge
Print 1 → 50
Multiple of 3 → "Fizz"
Multiple of 5 → "Buzz"
Multiple of both → "FizzBuzz"
* */

/*
* 2. Arrays & Loops
 1.Array Filtering
Input: array of numbers
Output: array with only numbers > 10
* */
/*
* 2. Average Calculator
Input: array of numbers
Output: average value
Bonus: find which numbers are above the average
* */
/*
* 3. Shopping Cart
Array of objects: {item, price, quantity}
Calculate total price
Apply discount if total > 100
* */
/*
* 4. 2D Array / Matrix
*Create 3x3 matrix of numbers
*Find sum of each row
*Find sum of each column
* */
/*
*3. Strings & Objects
1. Capitalize Words
Input: sentence
Output: sentence with first letter of each word capitalized

2. Simple Contact Book
Object: {name, phone, email}
Store multiple contacts in an array
Function to search by name and return contact info
3. Reverse String
Input: string
Output: reversed string
Bonus: reverse only words, not letters
* */
/*
* 4. Advanced Conditional Logic

Age Validator

Input: birth year

Output: eligible to vote? (18+)

Bonus: display exact age

Temperature Analyzer

Input: array of temperatures

Output: “cold”, “warm”, “hot” counts
* */

/*
* 5. Mini Projects

Calculator

Simple calculator: +, -, *, /

Input: numbers and operator

Guessing Game

Random number 1–20

User guesses until correct

Display number of attempts

* Todo List (CLI)

Add, remove, list tasks

Store tasks in array

Bonus: mark task complete
* */



