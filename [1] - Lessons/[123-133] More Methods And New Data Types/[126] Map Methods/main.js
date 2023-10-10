/* 

  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size

*/

let myMap = new Map([[10, "Number"], ["Name", "String"],[false,"Boolean"]]);

// .set()
console.log("%c.set()", "background-color: red;");
// myMap.set(10,"Number");
// myMap.set("Name", "String");

// .get()
console.log("%c.get()", "background-color: red;");
console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

// .delete()
console.log("%c.delete()", "background-color: red;");
// if the value is true => successfully deleted
// if the value is fale => not deleted
console.log(myMap.delete("Name"));

// .has()
console.log("%c.has()", "background-color: red;");
console.log("#".repeat(10))

// if the value is true => has
// if the value is fale => has not
console.log(myMap.has(10))
console.log(myMap.has("name"))

console.log("#".repeat(10))

// .clear()
// .clear() => clear the entier Map
console.log("%c.clear()", "background-color: red;");
myMap.clear();

console.log(myMap);
console.log(myMap.size)
