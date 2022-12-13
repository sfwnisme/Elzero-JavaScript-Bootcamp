/*
  Promise
  - All
  - All Settled
  - Race
*/

const firstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("First Promise");
  }, 100);
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("second Promise");
  }, 300);
});

const thirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("third Promise");
  }, 500);
});

/* ===============[Promise.all]=============== */
// it return all the resolve, but if there's a reject it returns it only (the rejected)
Promise.all([firstPromise, secondPromise, thirdPromise]).then(
  (resolveValue) => console.log(resolveValue),
  (rejectValue) => console.log(`reject Promise.all => ${rejectValue}`)
);

/* ===============[Promise.all]=============== */
// it returns all the resolve and all the rejected or it returns them all in a single array
// open console => you will see an array with the entir promises inculding the resolve and reject values
Promise.allSettled([firstPromise, secondPromise, thirdPromise]).then(
  (resolveValue) => console.log(resolveValue),
  (rejectValue) => console.log(rejectValue)
);

/* ===============[Promise.all]=============== */
// it returns the nearest value
Promise.race([firstPromise, secondPromise, thirdPromise]).then(
  (resolveValue) => console.log(`Race => ${resolveValue}`),
  (rejectValue) => console.log(`reject Race => ${rejectValue}`)
);
