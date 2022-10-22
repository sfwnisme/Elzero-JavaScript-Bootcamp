/* 
  Object 
  - Create Object With assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

// Object.assign Collect Objects To A Single Object It Named target
let finalObject = Object.assign(targetObject, obj1, obj2); // If The Object Property Has The Same Name Initially Will Take The First Property

// We Can Also Updating Properties
finalObject.prop1 = 21;
// And Adding Another Property Is Available
finalObject.pd = 3453;
console.log(finalObject);

// Creating A New Object Alos Available By Adding {} Instead Of target:
let newObject = Object.assign({}, obj1, { prop4: 4, prop5: 5 }); // All The Objects After {} Will Be In A New Object

console.log(newObject);
