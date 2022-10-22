/* 
  Function 
  - Rest Parameters Format==>[...parameter]
  --- It Allow The Function To Receive Unlimited Number Of Arguments Then Collect All The Arguments In A Single Array
  - Only One Allowed
  --- One Rest Parameter Only We Can Use And Add For Every Function
  - Must Be Last Element
  --- It Also Must And Have To Be At The Last Of The Parameters If There Another Parameters In The Range ()
*/

// Normally Using [3] Parameters And [3] Arguments To Get The Requested Out Put, But We Wanna Add More Arguments As The Next Example Follow >>>>>>
console.log("%cVol.1", "background-color: gold; color: #000;");
function calc(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(calc(10, 20, 30));

//As I Said In The Previuse Example We Need To Add Another Argument, But We Need Also Add Parameter For It [num44 = 40]. To Add The Arguments Automatically We Need To Use [Rest Parameter] Follow The Next Example >>>>>>
console.log("%cVol.2", "background-color: gold; color: #000;");
function calc2(num11, num22, num33, num44) {
  return num11 + num22 + num33 + num44;
}
console.log(calc2(10, 20, 30, 40));

// It Allow The Function To Receive Unlimited Number Of Arguments Then Collect All The Arguments In A Single Array
console.log("%cVol.3", "background-color: gold; color: #000;");
function calc3(...numbers) {
  console.log(Array.isArray(numbers)); // true
  console.log(numbers);
}
calc3(10, 20, 30, 40); // It Will Value Array

//Here We Used A Simple Advanced Example Of What We Can Use Rest Parameters For
console.log("%cVol.4", "background-color: gold; color: #000;");
function cal(...numbers2) {
  let result = 0;
  for (let i = 0; i < numbers2.length; i++) {
    result += numbers2[i];
  }
  return `Total Is ${result}`;
}

console.log(cal(10, 20, 10, 50, 30));
