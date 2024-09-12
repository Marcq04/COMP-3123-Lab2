// Exercise 1
// Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literalsand for..of
const gretter = (myArray, counter) => {
    var greenText = 'Hello';
    for (var index = 0; index < myArray.length; index++) {
        console.log(`${greenText} ${myArray[index]}`);
    }
}
gretter(['Randy Savage', 'Rick Flair', 'Hulk Hogan'], 3);

// Exercise 2
// Using destructuring assignment syntax and the spread operator, write a function will capitalize the 
// first letter of a string.

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Exercise 3
// Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
// the first character of each Color in the following array..

const colors = ['red', 'green', 'blue'];
// Code
const capitalizedColors = colors.map(capitalize);
console.log(capitalizedColors);

// Exercise 4
// Using array.proto.filter create a function that will filter out all the values of the array that are less
// than twenty.

var values = [1, 60, 34, 30, 20, 5];
// Code
const filterLessThan20 = values.filter((value) => value < 20);
console.log(filterLessThan20);

// Exercise 5
// Using array.proto.reduce create calculate the sum and product of a given array.
var array = [1, 2, 3, 4];
// Code
const calculateSum = array.reduce((sum, value) => sum + value, 0);
const calculateProduct = array.reduce((product, value) => product * value, 1);

console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6
/* Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
from Car Class. The parameters for the Car class is the model and year. The parameters for the
subclass is the model, year and balance.
Use the super key word in the Sedan subclass to set the model and name in base Car
constructor.*/

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `${this.model} ${this.year}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
// Subclass - extends Car super class
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} ${this.year} ${this.balance}`;
    }
}
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
