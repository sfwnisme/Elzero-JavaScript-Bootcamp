/* 
  Object
  - Create With New Keyword New Object();
*/

let user = {
  age: 19,
}; // We Will Drop The Next Created Object In Here
console.log(user);

user.name = "Sfwn";
user.age = 23;
user["country"] = "Yemen";
user["sayHello"] = function () {
  return `Hello`;
};

console.log(user["name"]);
console.log(user["age"]); // Updates It Self Form 19 To 23
console.log(user.country);
console.log(user.sayHello());

/* new Object() */
console.log("-".repeat(20));

let user1 = new Object({
  age: 19,
}); // We Will Drop The Next Created Object In Here
console.log(user1);

user1.name = "Sfwn";
user1.age = 23;
user1["country"] = "Yemen";
user1["sayHello"] = function () {
  return `Hello`;
};

console.log(user1["name"]);
console.log(user1["age"]); // Updates It Self Form 19 To 23
console.log(user1.country);
console.log(user1.sayHello());
