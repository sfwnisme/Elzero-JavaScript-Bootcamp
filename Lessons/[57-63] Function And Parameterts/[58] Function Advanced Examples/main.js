/* 
  Function Advanced Examples
*/
// We Can Use More Than One Parameter ✅

console.log(`%cVol.1`, `background-color: #FF6363; color: black;`);

function sayHello(userName, age) {
  console.log(`✅Hello ${userName} Your Age Is ${age}`);
}

sayHello(`Ahmed`, 30);
sayHello(`Khaled`, 20);
sayHello(`Sayed`, 15);

console.log(`%cVol.2`, `background-color: #FF6363; color: black;`);

function sayHelloTwo(userNameTwo, ageTwo) {
  if (ageTwo < 20) {
    console.log(`❌Sorry ${userNameTwo} This Content Is Unsuitable For You`);
  } else {
    console.log(`✅Hello ${userNameTwo} Your Age Is ${ageTwo}`);
  }
}

sayHelloTwo(`Ahmed`, 30);
sayHelloTwo(`Khaled`, 20);
sayHelloTwo(`Sayed`, 15);

console.log(`%cVol.3`, `background-color: #FF6363; color: black;`);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i += +true) {
    if (i === exclude) {
      continue;
    } else {
      console.log(i);
    }
  }
}

generateYears(1999, 2030, 2022);

console.log(`%cVol.4`, `background-color: #FF6363; color: black;`);
function generateYearsTwo(startTwo, endTwo, excludeTwo) {
  let i = startTwo;
  while (i <= endTwo) {
    i += +true;
    if (i === excludeTwo) {
      continue;
    } else {
      console.log(i);
    }
  }
}

generateYearsTwo(1999, 2030, 2022);
