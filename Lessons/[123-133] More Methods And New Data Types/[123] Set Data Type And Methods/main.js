/* 

  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties: 
  - size

  Methods:
  - add
  - delete
  - clear
  - has

*/
let myData = [1, 1, 1, 2, 3];

/* new Set() */
console.log("%cnew Set() ↓↓", "background: red;");

let myUniqueData = new Set(myData);
console.log(myUniqueData);
//↓ .size => .length => gives you the length of the unique elements of the array

/* .size */
console.log(myUniqueData.size); // 3
// Set Data not accepting .length method or array methods
console.log(myUniqueData.length); // undefined
console.log(myData[1]); // 1
console.log(myUniqueData[1]); // undefined

/* .add() */
console.log("%c.add() ↓↓", "background: red;");
// .add => new Set().add(element) // used in this format
let myUniqueData1 = new Set().add(1).add(1).add(1).add(2).add(3);

//↓ you can also update and add new elements using this way↓↓↓
myUniqueData1.add(4).add(5);
myUniqueData1.add(6).add(4);

console.log(myUniqueData1);

/* .delete() */
console.log("%c.delete() ↓↓", "background: red;");

let myUniqueData2 = new Set(myData);
myUniqueData2.delete(1);

console.log(myUniqueData2);

/* .clear() */
console.log("%c.clear() ↓↓", "background: red;");
let myUniqueData3 = new Set(myData);
// .clear() => Clearing the whole set Data
myUniqueData3.clear();
console.log(myUniqueData3);

/* .clear() */
console.log("%c.clear() ↓↓", "background: red;");
let myUniqueData4 = new Set(myData);

console.log(myUniqueData4.has(3));

console.log(myUniqueData4);
