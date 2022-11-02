/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

console.log(
  "%cSolution Vol.0 | Required Solution",
  "background-color: gold; color: #000;"
);

function showDetails(a, b, c) {
  let emptyArray = [];
  emptyArray.push(a, b, c);
  for (let i = 0; i < emptyArray.length; i++) {
    typeof emptyArray[i] === "string"
      ? (user = emptyArray[i])
      : typeof emptyArray[i] === "number"
      ? (age = emptyArray[i])
      : (bool = emptyArray[i]);
  }
  bool === true
    ? (bool = "You Ara Available For Hire")
    : (bool = "You Are Not Available For Hire");
  console.log(user, age, bool);
}

showDetails("Osama", 38, true); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails(38, "Osama", true); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails(true, 38, "Osama"); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails(false, "Osama", 38); // Hello Osama, Your Age Is 38, Your Available For Hire

console.log("%cSolution Vol.1", "background-color: gold; color: #000;");

function showDetails1(a, b, c) {
  let emptyArray = [];
  emptyArray.push(a, b, c);

  //Start Looping
  for (let i = 0; i < emptyArray.length; i++) {
    if (typeof emptyArray[i] === "string") {
      user = emptyArray[i];
    } else if (typeof emptyArray[i] === "number") {
      age = emptyArray[i];
    } else {
      bool = emptyArray[i];
    }
  }
  if (bool === true) {
    bool = "You Are Available For Hire";
  } else {
    bool = "You Are Not Available For Hire";
  }
  console.log(user, age, bool);
}

showDetails1("Osama", 38, true); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails1(38, "Osama", true); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails1(true, 38, "Osama"); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails1(false, "Osama", 38); // Hello Osama, Your Age Is 38, Your Available For Hire

console.log("%cSolution Vol.2", "background-color: gold; color: #000;");

function showDetails2(a, b, c) {
  let emptyArray = [];
  emptyArray.push(a, b, c);

  //Start Looping
  for (let i = 0; i < emptyArray.length; i++) {
    if (typeof emptyArray[i] === "string") {
      user = emptyArray[i];
    } else if (typeof emptyArray[i] === "number") {
      age = emptyArray[i];
    } else {
      bool = emptyArray[i];
      if (bool === true) {
        bool = "You Are Available For Hire";
      } else {
        bool = "You Are Not Available For Hire";
      }
    }
  }

  console.log(user, age, bool);
}

showDetails2("Osama", 38, true); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails2(38, "Osama", true); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails2(true, 38, "Osama"); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails2(false, "Osama", 38); // Hello Osama, Your Age Is 38, Your Available For Hire

console.log("%cSolution Vol.3", "background-color: gold; color: #000;");

function showDetails3(a, b, c) {
  let emptyArray = [];
  emptyArray.push(a, b, c);

  //Start Looping
  for (let i = 0; i < emptyArray.length; i++) {
    if (typeof emptyArray[i] === "string") {
      user = emptyArray[i];
    } else if (typeof emptyArray[i] === "number") {
      age = emptyArray[i];
    } else {
      if ((bool = emptyArray[i] === true)) {
        bool = "You Are Available For Hire";
      } else {
        bool = "You Are Not Available For Hire";
      }
    }
  }

  console.log(user, age, bool);
}

showDetails3("Osama", 38, true); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails3(38, "Osama", true); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails3(true, 38, "Osama"); // Hello Osama, Your Age Is 38, Your Available For Hire
showDetails3(false, "Osama", 38); // Hello Osama, Your Age Is 38, Your Available For Hire
/* -------------------------------------------------- */
console.log(
  "%cIdea Of Solution By: Amr",
  "background-color: gold; color: #000;"
);
