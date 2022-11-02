/* 
Number Methods
  - Tow Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger()
  -isNaN()

*/

console.log((100).toString()); //string
console.log((100.234).toString()); //string
console.log((100).toString()); //string
// toFixed()
console.log((100.3234).toFixed(5)); //string
console.log((100.3234).toFixed(5)); //string
console.log((100.234234).toFixed(2)); //string
console.log((100.234234).toFixed(2)); //string

// parseInt()

console.log(parseInt("100")); //Allow The Integer Number To Appear As A Number Not A String
console.log(parseInt("100.234")); //Don't Allow Float Point Numbers Appear
console.log(parseInt("100 Osama")); //It Allow To Resulte The Number If There Is A Word After It And Only The Number Appears
console.log(parseInt("Osama 100 ")); //Not Allow Words Before Or Number Between Two Words Eather More It Resulte NaN
console.log(parseInt("Osama 100 Osama")); //Not Allow Number Between Two Words Eather More It Resulte NaN

// parseFloat

console.log(parseFloat("100.4234")); //Number
console.log(parseFloat("100.4234 Osama")); //Number
console.log(parseFloat("Osama 100.4234 ")); //Number
console.log(parseFloat("Osama 100.4234 Osama")); //Number

//isInteger

console.log(Number.isInteger(200)); //true
console.log(Number.isInteger(200.3234)); //fales
console.log(Number.isInteger("200")); //fales
console.log(Number.isInteger("200.345")); //fales

//isNaN

console.log(Number.isNaN(10)); //fales
console.log(Number.isNaN(10.234)); //fales
console.log(Number.isNaN("10")); //fales
console.log(Number.isNaN("10.234")); //fales
console.log(Number.isNaN("osama" / 10)); //fales
