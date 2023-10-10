/*
Switch Challenge
*/

console.log(
  "%cChanging From [if] To [switch]",
  "background-color: gold;color: red;"
);
let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
  console.log(`Salary is ${salary}`);
} else if (job === "IT" || job === "Support") {
  salary = 6000;
  console.log(`Salary is ${salary}`);
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
  console.log(`Salary is ${salary}`);
} else {
  salary = 4000;
  console.log(`Salary is ${salary}`);
}

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(`Salary is ${salary}`);
    break;
  case "IT" || "Support":
    salary = 6000;
    console.log(`Salary is ${salary}`);
    break;
  case "Developer" || "Designer":
    salary = 7000;
    console.log(`Salary is ${salary}`);
    break;
  default:
    salary = 4000;
    console.log(`Salary is ${salary}`);
}

console.log(
  "%cChanging [switch] To [if]",
  "background-color: gold;color: red;"
);
let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
