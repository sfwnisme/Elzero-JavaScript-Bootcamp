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
  -Lesson Expressions
  --- entry => Saved History Of The Browser -  Opining through - Join
  --- Hash => Id Linkes
  --- http => hiber text transfare protocol
  --- https => hiber text transfare protocol secure player
*/

//location:href => redirect you to a specific link
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

// Portocol => http & https
console.log(location.protocol);
// location.protocol = "https"
// location.protocol = "http"

//reload() => reload the page
// console.log(location.reload()) // infinit reload
// location.reload() // infinit reload

//assign() => replace the current URL to new one. It will save all entries joined through in HISTORY

//replace() => oposite replace() it replace the current URL to new one. It will not save the removed ENTRY form HISTORY
// location.replace("https://google.com"); // directly will retarget you to https://google.com

