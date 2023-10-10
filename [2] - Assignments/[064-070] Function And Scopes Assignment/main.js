console.log("%cAssignment 1", "background-color: red; color: #000;");

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName.slice(0, 7)}.`;
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  // namePattern();
  function ageWithMessage(zAge) {
    return `${zAge.substr(0, 2)}`;
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    return `${zCountry.substring(0, 2).toUpperCase()}`;
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(
      zAge
    )}, You Live In ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log("%cAssignment 2", "background-color: red; color: #000;");
console.log("%cSolution 1", "background-color: gold; color: #000;");
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

console.log("%cSolution 2", "background-color: gold; color: #000;");

let urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("%cAssignment 3", "background-color: red; color: #000;");
let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log("%cAssignment 4", "background-color: red; color: #000;");

function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i])) === false) {
      // result += parseInt(data[i]);
      result += parseInt(data[i]);
      // return parseInt(data[i]);
    }
  }
  if (result === 0) {
    return "All Is Strings";
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log("-".repeat(20));

function specialMix1(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(parseInt(data[i])) === true) {
      // result += parseInt(data[i]);
      result += parseInt(data[i]);
      // return parseInt(data[i]);
    }
  }
  if (result === 0) {
    return "All Is Strings";
  }
  return result;
}

console.log(specialMix1(10, 20, 30)); // 60
console.log(specialMix1("10Test", "Testing", "20Cool")); // 30
console.log(specialMix1("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix1("Test", "Cool", "Test")); // All Is Strings

console.log("-".repeat(20));

function specialMix2(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
    if (isNaN(data[i])) {
      continue;
    } else {
      result += data[i];
    }
  }
  if (result === 0) {
    return "All Is Strings";
  }
  return result;
}

console.log(specialMix2(10, 20, 30)); // 60
console.log(specialMix2("10Test", "Testing", "20Cool")); // 30
console.log(specialMix2("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix2("Test", "Cool", "Test")); // All Is Strings
