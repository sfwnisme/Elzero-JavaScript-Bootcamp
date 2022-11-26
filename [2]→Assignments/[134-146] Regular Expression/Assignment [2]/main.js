let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// not best practice way
let specialNamesRe = /Os(\d+)?o/ig;
console.log(specialNames.match(specialNamesRe));

// best practice ways

// we wrote d* becuse it will search for numbers if there's no numbers skip
// we didn't wrote d+ because it search for strings only if there's no numbers it will not skip
let specialNamesRe2 = /\bOs\d*o\b/ig;
console.log(specialNames.match(specialNamesRe2));

// you don't need to use \b for the end it's not mandatory
let specialNamesRe3 = /\bOs\d*o/ig;
console.log(specialNames.match(specialNamesRe3));
// Output
// ['Os10O', 'OsO', 'Os100O']