/*
  Regular Expression
  - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let url6 = "https://www.youtube.com/watch?v=qjpjudx9_mU";
let url7 = "127.0.0.1:5500/[146]%20Regular%20Expression%20-%20Challenge/index.html";


let re = /(https?:\/\/)?(www.)?\w+.(org|com|net)?(:\d+)?(\/\w+)?(.\w+\?)?(.+)?/ig;
// let re = /(https?:\/\/)?(www.)?\w+.\w+(.+)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
console.log(url7.match(re));