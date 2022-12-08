/* 
  Oject Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

let myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    writable: true,
    configurable: true,
    value: 3,
  },
  d: {
    enumerable: true,
    configurable: true,
    value: 5,
  },
  e: {
    configurable: true,
    value: 6,
  },
});

// you can call a single descriptor
console.log(Object.getOwnPropertyDescriptor(myObject,"c"));

// you can call the whole descriptors
console.log(Object.getOwnPropertyDescriptors(myObject));