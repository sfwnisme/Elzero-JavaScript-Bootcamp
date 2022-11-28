/* 
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class Person {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username || 'Unknown';
    this.s = salary < 6000 ? salary + 1000 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // this function updates the name by easy way
  updateName(newName) {
    this.u = newName;
  }

  // this function updates the salary
  updateSalary(newSalary) {
    return (this.s = newSalary);
  }
}

let userOne = new Person(100, 'Elzero', 2345);
console.log(userOne.u);
// using inner constructor function to update properties
userOne.updateName('Osama');
// userOne.u = "Safwan";
console.log(userOne.u);

// previous salary before updating function
console.log(userOne.s);

// the new salary update after the updating function deployed
userOne.updateSalary(324234);
console.log(userOne.s);

// Checking the constructors data type
let str1 = new String('Elzero');
let str2 = 'Elzero';

console.log(typeof str1); // object => due to new String() method
console.log(typeof str2); // string => normal string syntax

console.log(str1 instanceof String); // true => Constructor only accepts Object
console.log(str2 instanceof String); // false => Constructor not accepts Stirng

console.log(str1.constructor === String); // ture => Constructor only accepts Objects
console.log(str2.constructor === String); // false => constructor not accepts Strings
