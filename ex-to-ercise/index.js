let person = {
    name: 'John',
    age: 32,
};

// Dot Notation
person.name = 'John1';
// Bracket Notation
let selection;
person['selection'] = 'John4';
person['name'] = 'John3';
console.log(person);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);
// console.log(typeof(selectedColors));

function greet(name, lastName){
    console.log("Hello Dear"+ ' ' + name + ' ' + lastName);
}
greet('John', 'Smith');

function square(number){
    return number * number;
}
square(3);
console.log(square(3));

let users = ["Alice", "Bob", "Charlie"];

let userItems = users.map(user => "<li>" + user + "</li>");

console.log(userItems);
