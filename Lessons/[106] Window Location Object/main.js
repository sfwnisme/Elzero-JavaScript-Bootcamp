/* 
  BOM [Browser Object Model]
  - Location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

console.log(location);
console.log(location.href);
// location.href = "#two";
// location.href = "https://google.com";

//Host & Hostname
// In Usual Sites The Both Methods Give You The Same Result => hostname => Due To Securty Process
console.log(location.host); // Got The Host With The Port
console.log(location.hostname); // Git  The Host Name
// location.href = "https://www.elzero.org";
// location.hostname = "google.com"; // Here We Can Change The Host Names
