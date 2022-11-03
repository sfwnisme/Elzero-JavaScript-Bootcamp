/*
  - Map Data Type
  Syntax: new Map(Iterable with Key/Value)
  -- Map vs Object
  --
  ------ Map => does not contain key by default
  ------ Object => has default keys
  --
  ------ Map => key can be anything [Function, Object, Any primitive data types]
  --------- **Primitive => primitive value or primitive data type is data than is not 
              an OBJECT and has no METHODS or PROPERTIES there are 7 primitive datatypes:
              - string
              - number
              - bigInt
              - boolean
              - undefined
              - symbol
              - null
  ------ Object => string or symbol
  --
  ------ Map => order by insertion
  ------ Object => not 100% till now
  --
  ------ Map => get items by size
  ------ Object => need to do manually
  --
  ------ Map => can be directly iterated
  ------ Object => not directly and need to use Object.keys() and so on
  --
  ------ Map -> better performance when add or remove data
  ------ Object => low performance when comparing to map

  
*/

let myObject = {};
// reset the object
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject); // No properties
console.log(myMap); // No properties

let myNewObject = {
  10 : "Number",
  "10" : "String",
}

// Object accepts only string or symbol keys that's mean if we write keys 10 and "10" the object will overwrite to the last key due to 10 == "10" 
console.log(myNewObject);
console.log(myNewObject[10]);


let myNewMap = new Map();
myNewMap.set(10,"Number");
myNewMap.set("10", "String");
myNewMap.set({a: 1, b: 2}, "obj");
myNewMap.set(["sfwn","safi"], "arr");
myNewMap.set(function dosomthing() {
  console.log("something")
}, "function");


console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));
console.log(myNewMap);