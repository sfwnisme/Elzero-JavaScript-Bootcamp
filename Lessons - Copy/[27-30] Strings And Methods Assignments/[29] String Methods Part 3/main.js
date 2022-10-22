/* 
String Methods Vol.3
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default Full Length) [ES6]
  - EndsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let a = "Elzero Web School";
console.log(a.length);

//substring Method
console.log("%csubstring Method", "background-color: gold; color: red;");

console.log(a.substring(1)); // .substring Method Works To Search Slice A Part From Character By Adding Number [Start , End {Opt}] The As Same As .slice Method It
console.log(a.substring(0, 1)); // .substring End Position Not Included
console.log(a.substring()); // Adding Nothing = Slice [0-End]
console.log(a.substring(12, 5)); // If We Swap It Automatically Will Fixed And Swap
console.log(a.substring(-5, 3)); // Negative Value = 0 => -5 = 0 , That Mean We Can Not Use Negative Values In .substring Like Some Other String Methods
console.log(a.substring(a.length - 5, a.length - 3)); // We Used .length To Start Searching From The End ,Becuase We Can Not Usign Negative Value And It Usually The End Value Not Including The End

//substr Method
console.log("%csubstr Method", "background-color: gold; color: red;");

console.log(a.substr(3)); // .substr Works To Slice Characters Parts By Length Not Index Number Position. If We Did Not Write Length Value It Normally Will Get All The Length
console.log(a.substr(12, 5)); // .substr Dealing With Length Not Index Position Number See Up Same Ex. With [.substring]
console.log(a.substr(17, 17)); // >= length = "" , More Or Equal [length] = None
console.log(a.substr(-5, 3)); // .substr Accept Negative Value

//includes Method
console.log("%cincludes Method", "background-color: gold; color: red;");

console.log(a.includes("Web")); // .includes Result Boolean Value [true-false] ,Start Position Is Optionally, If You Did Not Select Start Position It's Initially Will Start From [0]
console.log(a.includes("Web", 7)); // .includes Search Start From The Index Number Position
console.log(a.includes("Web", 8)); // If Position Nubmer Start From Out Range Target It = [fales]

//startsWith Method
console.log("%cstartsWith Method", "background-color: gold; color: red;");

console.log(a.startsWith("E")); // .startWith Works To Search The Character Start With The Value. Adding Start Is Optionally
console.log(a.startsWith("e", 0)); // If You Selected An Index And Start Out Of It Range It Will = [false]
console.log(a.startsWith("e", 8)); // If You Selected An Index And Start From It Position Number

//endsWith Method
console.log("%cendsWith Method", "background-color: gold; color: red;");

console.log(a.endsWith("l")); // .endsWith Works to Searching For If There And Part End With Or Not End With .Adding Length Is Optionally
console.log(a.endsWith("E", 0)); // It Works With Length Not Index Position Number
console.log(a.endsWith("E", 1)); // length = 1 [true]
console.log(a.endsWith("o", 6)); // length = 6 [true]
console.log(a.endsWith("o", 5)); // length = 5 [false]
