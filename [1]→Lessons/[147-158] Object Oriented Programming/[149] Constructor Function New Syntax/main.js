/* 
  Constructor Function
  - New Syntax
*/

// this constructor syntax is the related by ES6 (ES2015)
class Person {
  constructor(user, age, height, weight) {
    this.u = user;
    this.a = age;
    this.h = height;
    this.w = weight;
  }
}

let me = new Person('Sfwn', 24, '170cm', '70kg');
console.log(me.u);
console.log(me.a);
console.log(me.h);
console.log(me.w);

// two ways to check the relation of an constructor
console.log(me instanceof Person);
console.log(me.constructor === Person);
