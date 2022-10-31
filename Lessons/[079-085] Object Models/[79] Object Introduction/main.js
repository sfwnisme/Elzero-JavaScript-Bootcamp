/* 
  Object
  - Intro And What Is Object
  - Testing Window Object
  - Accessing Object
*/

// Object Built On Properties & Methodes

let user = {
  //Properties
  userName: "Sfwn",
  age: 23,
  // Methodes
  sayHello: function () {
    return `Hello`;
  },
};

console.log(user.userName);
console.log(user.age);
console.log(user.sayHello());
