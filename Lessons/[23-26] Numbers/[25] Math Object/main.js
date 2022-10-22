/* 
Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random
  - trunc()  [Es6]
*/

//round()
console.log(Math.round(55.5)); // If The Float Point Number Is 5 Or Up It Goes 10 >> 55.5 => 56.0
console.log(Math.round(55.4)); // If The Float Point Number Is 4 Or Less It Goes 0 >> 55.4 => 55.0

//ceil()
console.log(Math.ceil(55.5)); // ceil Works On The Float Point Number If It Is 9 Or 1 Less Or More It  Resulte The Max 10 >> 55.5 => 56
console.log(Math.ceil(55.4)); // 55.4 => 56

//floor
console.log(Math.floor(55.5)); // Floor Works On The Float Point Number If It's 9 Or 1 It Got The Min Resulte 0 >> 55.5 => 55.0
console.log(Math.floor(55.4)); // 55.4 => 55.0

//min()
console.log(Math.min(55, 66, 77, 88)); // min Job Is To Find The Smallest Number Of The Group >> 55

//max()
console.log(Math.max(55, 66, 77, 88)); // max Job Is To Find The Haighest Number Of The Group >> 88

//pow()
console.log(Math.pow(5, 5)); // pow Job Is To Double The Number Times OF The Number After ',' >> 5 , 5 => 5 * 5 * 5 * 5 * 5 = 3125

//random()
console.log(Math.random()); // random Works To Got You A Random Number The System Chose It If You Did Not Make A Number Range

//trunc()
console.log(Math.trunc(33.5)); // trunc() Job Is To Delete The Float Point Number Only Even It Is More Or Less It Did Not Give The Float Point Any Value
