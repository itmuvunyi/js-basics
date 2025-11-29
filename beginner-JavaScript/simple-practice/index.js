// create object called profile.
/*
* name
* age
* country
* isStudent
* */

let profile = {
    name : 'John',
    age : 21,
    country : 'Rwanda',
    isStudent : true
}
console.log(profile);

function describeUser(users){
    if(typeof users === 'object' && users !== null){
        const name = users.name;
        const ages = users.ages;

        let message = `Hello ${name}`;

        if(ages){
            message += `\nYou're ${ages} years old\n`;
        }
        return message;
    } else{
        return `${users} is empty`;
    }
}

const user1 = {name: "John2", ages:30};
const user2 = {name: "John3"};
const invalidInput = "not an object";
console.log(describeUser(user1));
console.log(describeUser(user2));
console.log(describeUser({}));