/* 
  Regular Expression

  Quantifiers
  n+    => ONe Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = " o@nn.sa osamaWggmail.com elzero@gmail.net osama@mail.ru"; // All Emails
let nums = " 0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let urls = "https://google.com http://www.website.net web.com"

let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));
// in this example we targeted to find a digit with zero before and after
// it resulted all targets except on element => '00'
// because this method is not for digits
// but at the same time it works for digits
let numsRe = /0\d+0/ig;
console.log(nums.match(numsRe)); // ['0110', '05120', '0560']

// This example explains how digits method works [n*]
// we notice that is a difference between [n+] and [n*]
// [n+] resulted all requested digits except '00'
// [n*] resulted all requested digits with '00'
let numsR = /0\d*0/ig;
console.log(nums.match(numsR)); // ['0110', '05120', '0560', '00']

let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));

