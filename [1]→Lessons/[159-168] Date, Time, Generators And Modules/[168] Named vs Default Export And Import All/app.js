// here we called saySomething by s due to we changed its name in the export section
// // boos is the default export you can name it randomly, because it's the only default export
// import boos, { a, arr, s } from "./main.js";

// console.log(a);
// console.log(arr);
// console.log(s());

// // the export default
// console.log(boos());


// import all
import boos,* as all from "./main.js";
console.log(all.a);
console.log(all.s());