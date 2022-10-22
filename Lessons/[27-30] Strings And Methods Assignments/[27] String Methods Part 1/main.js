/* 
String Methods
    - Access With Index 
    - Access With charAt
    - length
    - trim
    - toUpperCase
    - toLowerCase
    -Chain Methods
    
*/

let theName = "Ahmed";
let theName2 = " Ahmed ";
let theName3 = " Ahmed Ali ";

//Index Method
console.log("%cIndex Method", "background-color: gold;color: red; ");

console.log(theName[0]); // Index Method Output The Place Number Of The Word's Letter,Index Method Start From (0) , First Letter Take (0)
console.log(theName[4]);
console.log(theName[5]); // Index Method Output "undefind" If Select A Number Out Of The Range ex. The Name Range is (0 to 4)
console.log(theName2[0]); // Index Include Even Spaces and Outputting It

//charAt Method
console.log("%ccharAt Method", "background-color: gold;color: red ; ");

console.log(theName.charAt(0)); // charAt Like Index Method Resulte The Chosen Word's Letter , charAt Counting Start From (0)
console.log(theName.charAt(5)); // charAt Outputting "Empty Out Put" If Chosed Out Range Number
console.log(theName2.charAt(0)); // charAt Same As Index Output Spaces If The Character Include That >> 0 => space

//length
console.log("%clength Method", "background-color: gold; color: red; ");

console.log(theName.length); //length Outputting The Number Letters Or Numbers In The Character
console.log(theName2.length); //length Outputting Spaces If There Is

//trim
console.log("%ctrim", "background-color: gold;color: red;");

console.log(theName2); // Here We Notice That The Word Outputted With The Spaces Normally
console.log(theName2.trim()); // trim Method Deleting Spaces Around The Words
console.log(theName3); // Spaces Includes Normally
console.log(theName3.trim()); // In theName Variable We Included Two Words And Inserted .trim() The Spaces Deleted Exept Space Between Words

//toUpperCase
console.log("%ctoUpperCase", "background-color: gold;color: red;");

console.log(theName.toUpperCase()); // Uppercase The Letters

//toLowerCase
console.log("%ctoLowerCase", "background-color: gold; color:red");

console.log(theName.toLowerCase()); // Lowercase The Letters

//Chain Methods
console.log("%cChain Method", "background-color: gold; color: red;");
console.log(theName2.charAt(3).toUpperCase().trim()); // Chain Method Is Gathering All String Methods In One Line Or Code >> .charAt(3) => M
console.log(theName2.trim().charAt(3).toUpperCase()); // Here The Output Is E?? Due To We Used The .tirm() Before .charAt() >> charAt(3) => E


