/*
* Greet with arrow function
* */
// const greet = (name) => `Hello, ${name}`;
// console.log(`${greet('Innocent')}`);
//
// console.log(greet('Innocent'));

/*
* Shopping Bill Calculator with arrow func
* */

// let totalPrice = prompt("What is your total price: ");
//
// const billCalculator = (price) => {
//     let discount = 0;
//     let finalPrice = price;
//
//     if (price > 50){
//         discount = totalPrice * 0.10;
//         finalPrice = price - discount;
//         console.log(`Discount Applied!`);
//     }else{
//         console.log(`Discount Not Applied to ${totalPrice}`);
//     }
//     return finalPrice;
// }
// let finalPrice = billCalculator(totalPrice);
//
// console.log(`the original price is ${totalPrice}`);
// console.log(`the final price is ${finalPrice}`)

/*
* Rectangle Area Calculator
* */
//
// let height = Number(prompt("What is your height: "));
// let width = Number(prompt("What is your width: "));
//
// const rectCalculator = (height, width) => {
//     let area = height * width;
//     let perimeter = 2 * (height + width)
//
//     return { area, perimeter };
//
// }
// let result = rectCalculator(height, width);
//
// console.log(`The area of rectangle is ${result.area}cm`);
// console.log(`The area of rectangle is ${result.perimeter}cm`);

/*
* Temperature Converter
* */
//
// let scale = prompt("Enter a temperature scale(C or F): ").toUpperCase();
// let temp = prompt('Enter a temperature: ');
//
// const tempConverter = (scale, temp) => {
//     if (scale === 'C') {
//         let f = (temp * 9 / 5) + 32;
//         return { celsius: temp, fahrenheit: f }
//     }else if (scale === 'F') {
//         let c = (temp - 32) * (5 / 9);
//         return { celsius: c, fahrenheit: temp };
//     }
//     return { error: 'Invalid scale: ' + scale };
// }
//
// let results = tempConverter(scale, temp );
//
// if (results.error) {
//     console.log(results.error);
// } else {
//     console.log(`${results.celsius}°C = ${results.fahrenheit}°F`);
// }
//
// console.log(`The fahrenheit is ${results.celsius}°F to ${results.fahrenheit}°C`);
// console.log(`The fahrenheit is ${results.fahrenheit}°C to ${results.celsius}°F`)

/*
* Utility Functions
* */
//
// const checkNumber = (num1, num2) => {
//
//     if (num1 %2=== 0 && num2 %2=== 0) {
//         console.log(`Both number ${num1} and number ${num2} is even`);
//     } else if(num1 %2!== 0 && num2 %2!== 0) {
//         console.log('Some of these is Odd number or both');
//     }
//     return {
//         min : Math.min(num1, num2),
//         max : Math.max(num1, num2)
//     }
//
// }
// let resultss = checkNumber(4,2)
// console.log(`The minimum is min: ${resultss.min} and maximum is: ${resultss.max}`);

/*
* Profile Formatter
Input: name, age, country
Output: formatted string
Bonus: add profession and hobbies
* */
/*
let name = prompt("Enter your username: ");
let age = prompt("Enter your age: ");
let country = prompt("Enter your country: ");

const profileFormater = (name, age, country) => {

    const isEmpty = (value) => {
        return value === null || value.trim() === "";
    }
    if (isEmpty(name) || isEmpty(age) || isEmpty(country)) {
        console.log(`Please fill out all fields`);
    }else {
        console.log(`Hi ${name}, you're ${age} years old and your country is ${country}`);
        return { name, age, country };
    }

}

// let check = profileFormater(name, age, country);
// if(check.error){
//     console.log(check.error);
// }else{
//     // console.log(profileFormater(name, age, country));
// }
console.log(profileFormater(name, age, country));
*/

const switchingState = () => {

    let fruitType = prompt("Which fruit do you want? ")
    switch(fruitType){
        case 'oranges':
            console.log("Oranges are $0.59 a pound.");
            break;
        case 'Apples':
            console.log("Apples are $0.32 a pound.");
            break;
        case 'Mangoes':
            console.log("Mangoes are $0.56 a pound.")
            break;
            default:
                console.log(`Sorry, we are out of ${fruitType}.`);
    }
    console.log("Is there anything else you'd like?");
}
switchingState();






