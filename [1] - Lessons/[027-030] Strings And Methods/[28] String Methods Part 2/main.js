/* 
String Methods Vol.2
  - indexOf(Value [Mand] , Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Included End)
  - repeat(Times) [Es6]
  - split(Separator [Opt], Limit [Opt])
*/

let a = "Elzero Web School";

// indexOf
console.log("%cindexOf", "background-color: gold;color: red;");

console.log(a.indexOf("Web")); // indexOf Works To Find Character's Position Number >> INITIAL FORMAT= (Value(important) , Start Counting Position(optional)) RESULT = 7 Because It Start From 7 *IF YOU DID NOT WRITE START IT NORMALLY START FROM [0]
console.log(a.indexOf("Web", 0)); // indexOf Start Counting From "0" >> "Web" Position Number Is "7"
console.log(a.indexOf("Web", 7)); // It Will Equal [7]
console.log(a.indexOf("Web", 8)); // If Started From A Number Upper The Exact Range It Will Equal [-1]
console.log(a.indexOf()); // If Didn't Inserted Any Value It Result [-1]
console.log(a.indexOf("o")); // It = [5] , Becuase It Start Searching From The Start

// lastIndexOf
console.log("%clastIndexOf", "background-color: gold; color: red;");

console.log(a.lastIndexOf("Web", 100)); // lastIndexOf Method Is Opposit [indexOf] lastIndexOf Start From The End Till The Start *You Can Add Out Range Number As [100] Like This Ex.
console.log(a.lastIndexOf("Web")); // If We Did Not Write Start It Initilly Start From 0
console.log(a.lastIndexOf("o")); // It = [15] ,Becuase It Start Searching From The End Opposit The [indexOf]
console.log(a.lastIndexOf("Web", 6)); // It = [-1] , Becuase It Start From Out Range Number By The Way Of [lastIndexOf]

// slice
console.log("%cslice Method", "background-color: gold; color: red;");

console.log(a.slice(0)); // slice Depend On Start And End, But If You Must Write Start And It Optionally Adding The End
console.log(a.slice(0, 2)); // It Initilly The First Part = [0] ,But The End Number Include The Part Before Ex. start[0]=E , End[2]=l not z *NOT INCLUDING THE END POSITION
console.log(a.slice(-17, -15)); // slice Can Use Tricky Way By Negative Number = Negative Start From The End
console.log(a.slice(-2)); // It Should Equal [ool] But It NOT INCLUDING THE END

// repeat
console.log("%crepeat Method", "background-color: gold; color: red;");
console.log(a.repeat(3)); // .repeat It Do Number Of Copie

//slice
console.log("%cslice Method", "background-color: gold; color: red;");

console.log(a.split("")); // It Works To Separate The Part You Select In .split Method "Here We Select ("") That Mean To Split All Variable Parts Even Spaces"
console.log(a.split()); // It We Didn't Add Any Thing In () It Will Equal [arry] Of The Variable
console.log(a.split(" ")); // Here We Chose To Split Spaces
console.log(a.split("e")); // Here We chose To Split [e]
console.log(a.split(" ", 1)); // Here We Add Separator And Limit Option And We Limit To Split One Time Only [1]
console.log(a.split(" ", 2)); // We Used 2 Of Limit Times
