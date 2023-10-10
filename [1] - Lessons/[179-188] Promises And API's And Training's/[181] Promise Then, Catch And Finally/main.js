/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

/* ==============[First Way But We Net To Add .Catch, finally In The Next Example]============== */
let myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["Sfwn", "Ahmed", "Khaled", "Tariq"];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error(`The Employees Are Not Enough`));
  }
});

myPromise.then((resolveValue) => {
  resolveValue.length = 2;
  return resolveValue;
});

myPromise.then((resolveValue) => {
  resolveValue.length = 1;
  console.log(resolveValue);
});

myPromise.then((resolveValue) => {
  console.log(`The Passed Employee Is ${resolveValue}`);
});

/* ==============[Catch, finally]============== */
// in this way => separated ".then and .catch " methods and not chain them togather
// we will see the error many times as the number or the methods ".then and .catch"

const myPromiseTwo = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["Sfwn", "Ahmed", "Khaled", "Tariq"];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("The Employees Not Enough"));
  }
});

myPromiseTwo
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    console.log(resolveValue);
  })
  .catch((rejectedReason) => {
    console.log(rejectedReason);
  })
  .finally(
    console.log("Anyway Finally Method Displays Even Error, Pending Or Fulfill")
  );

  /* ==============[Catch The Error]============== */
  // in this way "chain" code method will send only on Error 
  // because we chained ".then, .catch, finally" in a single code or line

const myPromiseThree = new Promise((resolveFunction, rejectFunction) => {
  let employees = [];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("The Employees Not Enough"));
  }
})

myPromiseThree.then((resolveValue) => {
  resolveValue.length = 2;
  return resolveValue;
}).then((resolveValue) => {
  resolveValue.length = 1;
  console.log(resolveValue);
}).catch((rejectedReason) => {
  console.log(rejectedReason);
}).finally(console.log("Anyway Finally Method Displays Even Error, Pending Or Fulfill"))