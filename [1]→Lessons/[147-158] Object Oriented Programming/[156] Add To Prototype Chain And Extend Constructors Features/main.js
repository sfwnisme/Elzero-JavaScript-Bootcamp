/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(23, "sfwnisme", 2000);
console.log(userOne.u);

User.prototype.sayWelcome = function () {
  return `Wellcome`;
};
console.log(User.prototype);

console.log(userOne.sayWelcome());

Object.prototype.love = () => {
  return `I can not love you`;
};

String.prototype.stringTest = () => `Raise your hand I had known prototype`;
console.log("kk".stringTest());