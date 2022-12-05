/* 
  Class
  - Inheritance
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello "${this.u}"`;
  }
}

let userOne = new User(119, 'sfwnisme');
console.log(userOne.i);
console.log(userOne.u);

class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

let adminOne = new Admin(1234, 'adminisme', 'controler');
console.log(
  `Id: ${adminOne.i} username: ${adminOne.u} premissions: ${
    adminOne.p
  } => He Also Can Say => ${userOne.sayHello()}`
);
