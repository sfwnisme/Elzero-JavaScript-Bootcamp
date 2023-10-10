
let lastMon = new Date();
lastMon.setDate("0");
console.log(lastMon);

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let day = lastMon.getDate();
let getMonthName = monthNames[lastMon.getMonth()]
console.log(`Previous Month Is --(${getMonthName.toUpperCase()})-- And Last Day Is --(${day})--`);
console.log(day);


// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"