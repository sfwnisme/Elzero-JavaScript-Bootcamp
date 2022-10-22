/* 
  Object
  - Nested Object And Trainings
*/
let available = true; // Global Scope For Testing

let user = {
  name: "Sfwn",
  age: 23,
  skills: ["Html", "Css", "Js"],
  available: false,
  addresses: {
    ksa: "Jeddah",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function details() {
    // It's Mandatory To Add Object Container Then The Object => if(user.available) To Catch The Exact Object, If We Wrote Like This => if(available) You Will Got The Global Scope And Getting Complicated
    if (user.available === true) {
      return "Free To Work";
    } else {
      return "Not Free";
    }
  },
};
// Dot & Brackt Notation Examples
console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user["skills"]);
console.log(user.skills.slice(0, 2).join(" - "));
console.log(user["skills"].slice(0, 2).join(" - "));
console.log(user.addresses.ksa);
console.log(user["addresses"]["ksa"]);
console.log(user.addresses.egypt.two);
console.log(user["addresses"]["egypt"]["two"]);
console.log(user.checkAv());
console.log(user["checkAv()"]); // Undefined
