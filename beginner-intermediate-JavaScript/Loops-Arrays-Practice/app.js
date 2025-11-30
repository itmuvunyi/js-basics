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















