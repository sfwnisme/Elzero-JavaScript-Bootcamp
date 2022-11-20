/* 
  Regular Expression

  Quantifiers
  n+    => ONe Or More
  n*    -> zero or more
  n?    +> zero or one
*/

let mails = " o@nn.sa osamaWggmail.com elzero@gmail.net osama@mail.ru"; // All Emails
let nums = " 0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let urls = "https://google.com https://www.website.net web.com"

let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let numsRe = /0\d0/ig;
console.log(nums.match(numsRe));