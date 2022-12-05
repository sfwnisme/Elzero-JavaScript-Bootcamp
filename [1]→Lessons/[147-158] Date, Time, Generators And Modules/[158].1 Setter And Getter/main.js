/* 
  Oject 
  - getter
  - setter
  SRC: https://www.programiz.com/javascript/getter-setter
*/

//getter

const student = {
  // data property
  firstName: "Monica",

  // accessor property
  get getName() {
    return this.firstName;
  },
};

// accessing data property
console.log(student.firstName); // Monica
// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
// console.log(student.getName()); // error

//setter

const student2 = {
  firstName: "Monica",

  //accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  },
};

console.log(student2.firstName); // Monica

// change(set) object property using a setter
student2.changeName = "Sarah";

console.log(student2.firstName); // Sarah

// Object.defineProperty()
const student3 = {
  firstName: "Sfwn",
};

Object.defineProperty(student3, "getName", {
  get: function () {
    return this.firstName;
  },
});

Object.defineProperty(student3, "changeName", {
  set: function (newName) {
    this.firstName = newName;
  },
});

console.log(student3.getName);

student3.changeName = "Tariq";
console.log(student3.firstName);

// Object.defineProperties()
const student4 = {
  firstName: "Sfwn",
  lastName: "mo",
};

Object.defineProperties(student4, {
  getName: {
    get: function () {
      return this.firstName;
    },
  },
  sayHello: {
    get: function () {
      return `Hello ${this.firstName} Glad to see you`;
    },
  },
  changeName: {
    set: function (newName) {
      this.firstName = newName;
    },
  },
});

console.log(student4.getName);
console.log(student4.sayHello);

student4.changeName = "tariq";
console.log(student4.firstName);
console.log(student4.lastName)