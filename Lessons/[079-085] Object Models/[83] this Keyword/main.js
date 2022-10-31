/* 
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When A Function Is Called As A Method Of An Object,
  --- Its this Is Set To The Object The Method Is Called On.
  - Global Object
  - Test Variables With Window and This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(window); // window
console.log(this); // window

myVar = 100;
console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(window);
  return window;
}
sayHello(); // For => console.log(sayHello);
console.log(sayHello() === this); // For => return window;

function sayHello0() {
  console.log(this);
  return this;
}
sayHello0(); // For => console.log(this);
console.log(sayHello0() === window); // For => return this;

let user = {
  name: "Sfwn",
  age: 23,
  country: "Yemeni",
  available: false,
  checkAv: function () {
    // return user.available === false ? `Not Free For Work` : "Free For Work";
    if (user.available === false) {
      return `Still Not Free For Work`;
    } else {
      return "Free For Work";
    }
  },
};

console.log(
  `${user.name} Mohamed`,
  `${user.age} Years`,
  `${user.country} Nationality`,
  `${user.checkAv()}`
);

let usr = {
  age: 38,
  ageInDays: function () {
    return usr.age * 365;
  },
};

console.log(usr.age, usr.ageInDays());

let usrr = {
  age: 38,
  ageInDays: function () {
    return this.age * 365; // Using this Instead Of Object varName
  },
};

console.log(usrr.age, usrr.ageInDays());
