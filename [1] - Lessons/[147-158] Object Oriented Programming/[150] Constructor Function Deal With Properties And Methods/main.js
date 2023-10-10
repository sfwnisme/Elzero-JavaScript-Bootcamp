/* 
  Constructor Function
  - Deal With Properties And Methods
*/

class Person {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || 'Unknown';
    this.s = salary < 6000 ? salary + 1000 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Id Is ${this.i}`;
  }
}

let userOne = new Person(100, 'Elzero', 2345);
let userTwo = new Person(101, '', 6000);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg()); // you must write () for the function
console.log(userOne.writeMsg());

console.log(userTwo.u);
console.log(userTwo.s);
console.log(userTwo.msg); // native code note:CHECK THE CONSOLE => if you did not write () it will display the whole function syntax you had written
console.log(userTwo.writeMsg); // native code note:CHECK THE CONSOLE => if you did not write () it will display the whole function syntax you had written
