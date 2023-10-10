let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
console.log(Object.keys(myInfo))
console.log(Object.entries(myInfo))

// .entries() => change object to array
let map = new Map(Object.entries(myInfo));
console.log(map);
console.log(map.size);
console.log(map.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

