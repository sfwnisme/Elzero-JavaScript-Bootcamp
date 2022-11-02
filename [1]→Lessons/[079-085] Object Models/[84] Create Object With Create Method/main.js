/* 
  Object
  - Create Object With create Method
*/

let user = {
  age: 20,
  doubleAge: function () {
    return user.age * 2;
  },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());

// this Example

let user0 = {
  age: 20,
  doubleAge: function () {
    return this.age * 2; // As Previous Lessons We Can Use this Instead Of Object Returned Variable
  },
};
console.log(user0);
console.log(user0.age);
console.log(user0.doubleAge());

// Object.create()
console.log("%cEmpty Object.create({})", "Background-color: gold;color: #000;");
let obj = Object.create({});
console.log(obj);

obj.name = "Sfwn";
obj.age = 20;
obj.country = "YE";

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.country);

console.log(
  "%cEmpty Object.create(prototype) Without this Method",
  "Background-color: gold;color: #000;"
);

let copyObj = Object.create(user); // We Used "user0" That Has this Method

console.log(copyObj);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age); // Did Not Precessed This Because The Mothod Multibly On user.age
console.log(copyObj.doubleAge());

console.log(
  "%cEmpty Object.create(prototype) With this Method",
  "Background-color: gold;color: #000;"
);

let copyObjWithThis = Object.create(user0); // We Used "user0" That Has this Method

console.log(copyObjWithThis);

copyObjWithThis.age = 50;

console.log(copyObjWithThis);
console.log(copyObjWithThis.age); // It Processed Here Because It Has this.age And This Make It Easy To Use As A Prototype
console.log(copyObjWithThis.doubleAge());
