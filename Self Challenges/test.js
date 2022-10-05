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

