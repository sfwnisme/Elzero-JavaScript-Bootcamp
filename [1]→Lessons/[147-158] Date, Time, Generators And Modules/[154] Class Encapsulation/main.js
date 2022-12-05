/* 
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Simplifies The App.
*/
/* 
  Test 
  - Make Class => done
  - Make Inheritance => done
  - Make Encapsulation Properties And Methods
*/

class User {
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    // you can't call this property as usual, due to it has encapsulated
    // you can call it by only one way => by its family ==> the other properties and methods
    // and declaring it out properteis zone as a method
    this.#e = eSalary;
  }
  getSalary() {
    return `${parseInt(this.#e)}`;
  }
}

let userOne = new User(22, 'sfwnisme', '5000');
console.log(userOne.i);
console.log(userOne.u);
// console.log(userOne.#e * 0.3); // you can't call encapsulated property by usual way
console.log(userOne.getSalary() * 0.3);

class Admin extends User {
  #a;
  constructor(id, username, eSalary, percent, age) {
    super(id, username, eSalary);
    this.p = percent;
    this.#a = age;
  }
  getAge() {
    return this.#a;
  }
}

let adminOne = new Admin(12, "adminisme", 8000, 0.3, '39 Years');
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.getSalary() * adminOne.p)
console.log(adminOne.getAge());