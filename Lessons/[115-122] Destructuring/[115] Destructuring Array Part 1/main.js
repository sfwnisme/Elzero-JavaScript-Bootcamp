/* 
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct  variables"
  - Destructuring Array
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// extracting the variable to a new declared variables
let [a, b, c, d] = myFriends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// adding out range destructuring variable outputs 'undefined'
[a, b, c, d, e] = myFriends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); // undefined

// adding out range destructuring variable outputs 'undefined', But you can declaring it by adding  ="..."
[a, b, c, d, e = "helloooooooo"] = myFriends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); // hellooooooooo

// you can avoid some array's elements using space between ', ,'
let [, , y, z] = myFriends; // Ali , Maysa
console.log(y);
console.log(z);
