/* 
var mylist = ["One", "Two", "One", "One", "One", "three"];
remove = new Set(mylist);
console.log(remove);

var list = ["One", "Two", "One", "One", "One", "three"];
list = list.filter((value, index) => {
  if (index == list.length) {
    return;
  }
  if (value != list[index + 1]) {
    return value;
  }
});

console.log(list);

var arr = ["One", "Two", "One", "One", "One", "three"];

arr.forEach((value, index) => {
  if (index == arr.length) {
    return;
  }
  if (value != arr[index + 1]) {
    return value;
  }
  console.log(value);
});
// console.log(arr)
 */
var arr = ["One", "Two", "One", "One", "One", "three"];

let arrFilter = arr.filter((item, index) => {
  console.log([item]);
});
console.log(arrFilter);
