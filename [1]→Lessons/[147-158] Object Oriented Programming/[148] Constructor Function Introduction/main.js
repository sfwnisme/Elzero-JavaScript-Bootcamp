/* 
  Constructor Function
*/

function User(id, username, salary) {
  this.id = id;
  this.userName = username;
  this.salary = salary + 299;
}

let userOne = new User(100, 'Osama', 2000);
console.log(userOne.id);
console.log(userOne.userName);
console.log(userOne.salary);
console.log(Object.keys(userOne).join(" - "))

let userTwo = new User(101, 'Ali', 3000);
console.log(userTwo.id);
console.log(userTwo.userName);
console.log(userTwo.salary);

let userThree = new User(102, 'Sayed', 4000);
console.log(userThree.id);
console.log(userThree.userName);
console.log(userThree.salary);
/* 
let userOne = {
  id: 100,
  userName: "Osama",
  salary: 2000,
};

console.log(userOne.id);
console.log(userOne.userName);
console.log(userOne.salary);

let userTwo = {
  id: 101,
  userName: "Ali",
  salary: 3000,
};
console.log(userTwo.id);
console.log(userTwo.userName);
console.log(userTwo.salary);

let userThree = {
  id: 102,
  userName: "Sayed",
  salary: 4000,
};

console.log(userThree.id);
console.log(userThree.userName);
console.log(userThree.salary);
 */
