/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
console.log("%cPart Vol.1", "background-color: gold;color: red;");
console.log(counter++);
console.log(my.slice(zero, counter--).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log("%cPart Vol.2", "background-color: gold;color: red;");

console.log(zero++);
console.log(my.slice(zero++, counter).reverse()); // ["Elham", "Mazero"]
console.log(zero);

console.log("%cPart Vol.3", "background-color: gold;color: red;");

// console.log(--counter);
console.log(my[zero--].slice(--zero, ++zero + zero++) + my[1].slice(zero--)); // "Elzero"
console.log(zero);
console.log(counter);

console.log("%cPart Vol.4", "background-color: gold;color: red;");

console.log(my[1][4] + my[1][5].toUpperCase()); // "rO"
