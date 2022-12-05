/* 
  Class
  - Static Properties And Methods
*/

class User {
  // this static method will counte the members
  static counter = 0;
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    // we wrote User. and not This. because it will be used for class Constructor only
    User.counter++;
  }
  msg() {
    return `Preperties`;
  }
  static msg2() {
    return `Methods`;
  }
  // this function only will be used by class Constructor due to it's => static
  // this method will counte the users we create from the constructor function
  static membersCounter() {
    return `${this.counter} Members`;
  }
}

let userOne = new User(100, 'Osama', 2349);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.msg()); // this method only for class objects
// console.log(userOne.msg2()); // will not working from class objects
console.log(User.msg2()); // this method only for class constructor
// console.log(User.msg()); // will not work from class constructor
console.log(User.membersCounter());
