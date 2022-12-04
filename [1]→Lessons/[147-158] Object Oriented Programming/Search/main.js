/* 
  Oject 
  - getter
  - setter
  SRC: https://www.programiz.com/javascript/getter-setter
*/

//getter

const student = {
  // data property
  firstName: "Monica",

  // accessor property
  get getName() {
    return this.firstName;
  },
};

// accessing data property
console.log(student.firstName); // Monica
// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
// console.log(student.getName()); // error

//setter

const student2 = {
  firstName: "Monica",
  set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student2.firstName);
student2.changeName = "sarah";
// student2.changeName("sarah");
console.log(student2.firstName)