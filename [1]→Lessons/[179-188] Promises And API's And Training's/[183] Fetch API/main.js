/*
  Promise And XHR
*/

// Fetch Way To Call An API
fetch("https://api.github.com/users/sfwnisme/repos").then((result) => {
  console.log(result); // callback a Response
  let myData = result.json();
  console.log(myData); // It will return a Promise. 
  // But if we use it in the next ".then" it will call the array of the API
  return myData; // return to use it in the next ".then"
}).then((data) => {
  console.log(data); // test
  data.length = 10;
  return data;
}).then((data) => {
  console.log(data[1].name)
})




// Promise And Network Way To Call An API
// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("Not Found"));
//       }
//     };
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/sfwnisme/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => {
//     console.log(result[0]);
//   })
//   .catch((rej) => console.log(Error(`it rejected ${rej}`)))
//   .finally(() => console.log("Done"));

// /* ==========[Another Solution]========== */

// const getData2 = (apiLink) => {
//   let prom = new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("Not Found"));
//       }
//     };
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
//   return prom;
// };

// getData2("https://api.github.com/users/sfwnisme/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => {
//     console.log(result[0]);
//   })
//   .catch((rej) => console.log(Error(`it rejected ${rej}`)))
//   .finally(() => console.log("Done"));
