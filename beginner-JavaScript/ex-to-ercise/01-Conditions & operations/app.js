 // To check if the number is positive and check if the user is allowed to vote(+18)

 let num = 5;

if (num > 0){
    console.log(`The number ${num} Is greater than zero`)
}else {
    console.log(`The number ${num} Is less than zero`)
}

let userName = prompt('Enter your age');
let age = parseInt(userName);

if( age === 18 || age > 18 ){
    console.log(`You're ${age} years old, you're allowed`);
}else if(age < 18 && age > 0) {
    console.log(`The age is ${age} years old, you're not allowed at this time`);
}
else if(age !== 1 && age <= 0){
    console.log("Not allowed for this time");
}

// Login simulation
 let username = prompt("enter your name: ");
let password = prompt("enter your password: ");

 if (username && password && password.length >= 4){
     console.log(`Welcome ${username}!`);
 } else{
 console.log(`Try again something goes wrong!`);
 }

 let x = 0;
 if (x %2=== 0){
     console.log(`the number ${x} is even number`);
 }else if(x %2!==0){
     console.log(`the number ${x} is odd number`);
 }else{
     console.log("Undefined number");
 }

 // Calculator grade task

let user = prompt('Enter your username');
let grade = prompt('Enter your grade number');

grade = Number(grade);

if(grade >= 90 || grade <= 100) {
    console.log(`Hi ${user}  you have a grade A`);
}else if(grade >= 70 && grade <= 89) {
    console.log(`Hi ${user} you have a grade B`);
}else if(grade >= 50 &&grade <= 69) {
    console.log(`Hi ${user} you have a grade C`);
}else if(grade >= 30 && grade <= 49) {
    console.log(`Hi ${user} you have a grade D`);
}else if (grade <= 29){
    console.log(`Hi ${user} you Fail`);
}else {
    console.log("Invalid");
}

 // Temperature checker

 let users = prompt("enter name");
let temp = parseInt(prompt("enter temperature number"));
if(temp < 20){
    alert(`Hi ${users}, today the temperature ${temp} is cold`);
}else if(temp >= 20 && temp < 30){
    alert(`Hi ${users}, today the temperature ${temp} is warm`);
}else if(temp === 30){
    alert(`Hi ${users}, today the temperature ${temp} is Hot`);
}else{
    alert('Extremely hot');
}