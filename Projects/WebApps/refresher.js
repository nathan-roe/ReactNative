// destructuring
const person = {
    firstname: "Nate",
    lastname: "Roe",
    email: "nate@nate.com",
    password: "nateIzKool1234",
    addresses: [
        {
            address: "asdfasdf",
            city: "boise",
            zip: "132456"
        },
        {
            address: "rujertgwf",
            city: "california",
            zip: "675432"
        },
        {
            address: "fysuasdftrewadsf",
            city: "new york",
            zip: "0000321"
        }
    ]
};
const arr = [1,2,3,4,5,6,7,8,9,10];
const { firstname } = person;
const [firstNum, secondNum] = arr;
console.log(firstname);
console.log(firstNum, secondNum);

// to specify a different variable name while destructuring: 
const {firstname: nate} = person;
console.log(nate);
// destructure more complex data
const {addresses: [, secondAddress]}= person;
console.log(secondAddress.city);

// Rest / Spread
const animals = ["giraffe", "wolf", "horse", "bull", "fox"];
let [, , ...notWolfOrGiraffe] = animals;
console.log(notWolfOrGiraffe);

// arrow functions 

const printVar = str => console.log(str);
printVar(notWolfOrGiraffe);
// Ternary operators
const isThisDog = str => {
    console.log(str == "dog" ? "This is a dog" : "This is not a dog");
    return "Hello World";
}
isThisDog("dog");
isThisDog("notDog");

let aNames = animals.filter(a => a.includes("a"));
console.log(aNames);