console.log("%cAssignment 1", "background-color: gold; color:#000");
console.log("%cSolution Vol.1", "background-color: red; color:#000");

function sayHello(theName, theGender) {
  switch (theGender) {
    case "Male":
      console.log(`Hello Mr ${theName}`);
      break;
    case "Female":
      console.log(`Hello Miss ${theName}`);
      break;
    default:
      console.log(`Hello${theName}`);
  }
}

sayHello("Osama", "Male"); // Output => "Hello Mr Osama"
sayHello("Eman", "Female"); // Output => "Hello Miss Eman"
sayHello("Sameh"); // Output => "Hello Sameh"

console.log("-".repeat(20));

console.log("%cSolution Vol.2", "background-color: red; color:#000");

function sayHello1(theName, theGender) {
  theGender === "Male"
    ? console.log(`Hello Mr ${theName}`)
    : theGender === "Female"
    ? console.log(`Hello Miss ${theName}`)
    : console.log(`Hello ${theName}`);
}

sayHello1("Osama", "Male"); // Output => "Hello Mr Osama"
sayHello1("Eman", "Female"); // Output => "Hello Miss Eman"
sayHello1("Sameh"); // Output => "Hello Sameh"

console.log("%cSolution Vol.3", "background-color: red; color:#000");

console.log("-".repeat(20));

function sayHello2(theName, theGender) {
  let empty = [];
  empty.push(theName, theGender);
  for (let i = 0; i < empty.length; i++) {
    if (empty[i] === "Male") {
      console.log(`Hello Mr${theName}`);
    } else if (empty[i] === "Female") {
      console.log(`Hello Miss${theName}`);
    } else if (empty[i] === undefined) {
      console.log(`Hello ${theName}`);
    }
  }
}

sayHello2("Osama", "Male"); // Output => "Hello Mr Osama"
sayHello2("Eman", "Female"); // Output => "Hello Miss Eman"
sayHello2("Sameh"); // Output => "Hello Sameh"

console.log("%cAssignment 2", "background-color: gold; color:#000");
console.log("%cSolution Vol.1", "background-color: red; color:#000");

function calculate(firstNum, secondNum, operation) {
  if (operation === "add") {
    console.log(`${firstNum + secondNum}`);
  } else if (operation === "subtract") {
    console.log(`${firstNum - secondNum}`);
  } else if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (operation === "multiply") {
    console.log(`${firstNum * secondNum}`);
  } else {
    console.log(`${firstNum + secondNum}`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

console.log("%cSolution Vol.2", "background-color: red; color:#000");

function calculate2(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    return `Second Number Not Found`;
  }
  switch (operation) {
    case "add":
    default:
      return `${firstNum + secondNum}`;
      break;
    case "subtract":
      return `${firstNum - secondNum}`;
      break;
    case "multiply":
      return `${firstNum * secondNum}`;
      break;
  }
}

// Needed Output
console.log(calculate2(20)); // Second Number Not Found
console.log(calculate2(20, 30)); // 50
console.log(calculate2(20, 30, "add")); // 50
console.log(calculate2(20, 30, "subtract")); // -10
console.log(calculate2(20, 30, "multiply")); // 600

console.log("%cAssignment 3", "background-color: gold; color:#000");
console.log("%cSolution Vol.1", "background-color: red; color:#000");

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge} Years`);
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * (365 / 7)} Weeks`);
    console.log(`${theAge * 365} day`);
    console.log(`${theAge * (365 * 24)} Hours`);
    console.log(`${theAge * (60 * 24 * 365)} Minutes`);
    console.log(`${theAge * (60 * 60 * 24 * 365)} Seconds`);
  } else {
    console.log("%cAge Out Of Range", "color: red;");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(2022 - 1999); // Months Example => 456 Months | 2022 - 1999 = 23

console.log("%cSolution Vol.2", "background-color: red; color:#000");

function ageInTime1(theAge) {
  let years = theAge,
    monthes = theAge * 12,
    weeks = (theAge * 365) / 7,
    days = theAge * 365,
    hours = theAge * 365 * 24,
    minutes = theAge * 365 * 24 * 60,
    secondes = theAge * 365 * 24 * 60 * 60; // We Can Also Calculate The Values To Variables And Add It Directly To Make It More Usful

  if (theAge > 10 && theAge < 100) {
    console.log(`${years} Years`);
    console.log(`${monthes} Months`);
    console.log(`${weeks} Weeks`);
    console.log(`${days} day`);
    console.log(`${hours} Hours`);
    console.log(`${minutes} Minutes`);
    console.log(`${secondes} Seconds`);
  }
}
// Needed Output
ageInTime1(110); // Age Out Of Range
ageInTime1(23); // Months Example => 456 Months

console.log("%cAssignment 4", "background-color: gold; color:#000");
console.log("%cSolution Vol.1", "background-color: red; color:#000");

function checkStatus(a, b, c) {
  let arr = [];
  arr.push(a, b, c);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      user = arr[i];
    } else if (typeof arr[i] === "number") {
      num = arr[i];
    } else {
      bool = arr[i];
    }
  }
  if (bool === true) {
    bool = `Availabel`;
  } else {
    bool = `Not Availabel`;
  }
  console.log(user, num, bool);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("%cSolution Vol.2", "background-color: red; color:#000");

function checkStatus1(a, b, c) {
  let arr = [];
  arr.push(a, b, c);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      user = arr[i];
    } else if (typeof arr[i] === "number") {
      num = arr[i];
    } else {
      if ((bool = arr[i] === true)) {
        bool = `Availabel`;
      } else {
        bool = `Not Availabel`;
      }
    }
  }

  console.log(user, num, bool);
}

// Needed Output
checkStatus1("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus1(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus1(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus1(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("%cSolution Vol.3", "background-color: red; color:#000");

function checkStatus2(a, b, c) {
  let arr = [];
  arr.push(a, b, c);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      user = arr[i];
    } else if (typeof arr[i] === "number") {
      num = arr[i];
    } else {
      bool = arr[i];
      if (bool === true) {
        bool = `Availabel`;
      } else {
        bool = `Not Availabel`;
      }
    }
  }

  console.log(user, num, bool);
}

// Needed Output
checkStatus2("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus2(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus2(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus2(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("%cSolution Vol.4", "background-color: red; color:#000");

function checkStatus3(a, b, c) {
  let arr = [];
  arr.push(a, b, c);
  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] === "string"
      ? (user = arr[i])
      : typeof arr[i] === "number"
      ? (num = arr[i])
      : (bool = arr[i]);
  }
  bool === true ? (bool = `Availabel`) : (bool = `Not Availabel`);

  console.log(user, num, bool);
}

// Needed Output
checkStatus3("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus3(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus3(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus3(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("%cSolution Vol.5", "background-color: red; color:#000");

function checkStatus4(a, b, c) {
  let arr = [];
  arr.push(a, b, c);
  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] === "string"
      ? (user = arr[i])
      : typeof arr[i] === "number"
      ? (num = arr[i])
      : (bool =
          arr[i] === true ? (bool = `Availabel`) : (bool = `Not Availabel`));
  }

  console.log(user, num, bool);
}

// Needed Output
checkStatus4("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus4(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus4(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus4(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("%cAssignment 5", "background-color: gold; color:#000");
console.log("%cSolution Vol.1", "background-color: red; color:#000");

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

// Another Solution While We Wanna stop On 2015
console.log("%cSolution Vol.1", "background-color: red; color:#000");
function createSelectBox1(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    if (i === 2015) {
      break;
    }
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox1(2000, 2021);

console.log("%cAssignment 6", "background-color: gold; color:#000");
console.log("%cSolution Vol.1", "background-color: red; color:#000");

function multiply(...num) {
  let result = 1;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "string") {
      continue;
    } else {
      // result *= Math.trunc(num[i]);
      result = result * Math.trunc(num[i]);
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

console.log("%cSolution Vol.2", "background-color: red; color:#000");

function multiply1(...num) {
  let result = 1;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "number") {
      result *= parseInt(num[i]);
    }
  }
  console.log(result);
}

multiply1(10, 20); // 200
multiply1("A", 10, 30); // 300
multiply1(100.5, 10, "B"); // 1000
