/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/

let tld = "Com Net Org Info Code Io";
let tldRe = /com|net|info/ig;
console.log(tld.match(tldRe))

let nums = "12345678910";
let numsRe = /[0-9]/ig;
console.log(nums.match(numsRe))

let notNums = "12345678910";
let notNumsRe = /[^0-8]/ig;
console.log(notNums.match(notNumsRe))

let specialNums = "12(3%45^6789@1#0";
let specialNumsRe = /[^0-9]/ig;
console.log(specialNums.match(specialNumsRe))

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/ig;
console.log(practice.match(practiceRe));
