console.log(new Date("1982"));
let date = Date.now();
let birth = new Date("Oct 25 82");
let seconds = (date - birth) / 1000;
let min = (date - birth) / 1000 / 60;
let hou = (date - birth) / 1000 / 60 / 60;
let day = (date - birth) / 1000 / 60 / 60 / 24;
let mon = (date - birth) / 1000 / 60 / 60 / 24 / 30;
let year = (date - birth) / 1000 / 60 / 60 / 24 / 30 / 12;
console.log(seconds);
console.log(min);
console.log(hou);
console.log(day);
console.log(mon);
console.log(year);
// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

