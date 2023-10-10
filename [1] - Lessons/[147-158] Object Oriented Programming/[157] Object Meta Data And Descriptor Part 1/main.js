/* 
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

let myObject = {
  a: 1,
  b: 2,
}

Object.defineProperty(myObject, "c", {
  writable: true, // false => you can't upating it ==> myObject.c = 234; will not update its value
  enumerable: true, // false => you will not be able to loop this property, while you can use it normaly except loop
  configurable: true, // false => you will not be able to modify, delete or redefine anything
  value: 3,
})

// writable: true, => you can update and override
myObject.c = 23;

// configurable: true, => you can modify, delete, and redefine the property
console.log(delete myObject.c); // delete the test to display Object.c

// enumerable: true, => you can loop it
for (let prop in myObject) {
  console.log(prop, myObject[prop])
}
console.log(myObject);

Object.defineProperty(myObject, "c", {
  writable: true,
  enumerable: true,
  configurable: true, // if the previous define is false you will not be able to redefine it
  value: 3,
})