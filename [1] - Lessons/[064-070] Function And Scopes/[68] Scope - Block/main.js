/* 
  Scope 
  - Block Scope [If, Switch, For]
*/

console.log("%cExample Vol.1", "Background-color: red; color: #000;");
var x = 10;

if (10 === 10) {
  var x = 50;
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`); // Here We Expected That Will Equal 10 But It Over Rided It To If Condition Value 50 Because We Used "var" While It Should Be Equal 10 In The Right Way To See The Right Way Follow The Next Example

console.log("%cExample Vol.2", "Background-color: red; color: #000;");

// TO GET THE OUTPUT OF BLOCK CODE CONSEPT WE USE "let Or const" NOT "var" | عشان نطبق المبداء اللي يخلي البلوك اوف كود له سكوبينج لازم نستخدم الليت او الكونيست
let xx = 10;

if (10 === 10) {
  let xx = 50;
  console.log(`From If Block ${xx}`);
}

console.log(`From Global ${xx}`); // Here In The Right Way We Deleted var And Used let Instead To Avoid Over Riding

// Generally We Should Use let Or Const Instead Of var Because var Is Not Block Scope

// const And let ==>> BLOCK SCOPE ==>> Not Over Ride
// var ==>> NOT BLOCK SCOPE ==>> Over Ride
