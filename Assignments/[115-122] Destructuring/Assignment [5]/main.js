const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

console.log(game.releases); //test
// Write Your Destructuring Assignment/s Here
({ title: t, developer: d, releases } = game);
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style
console.log(`And I Love ${d} Games`);
// And I Love Falcom Games
//
//saving the properties of the object in a variable to using it any where
let obj = Object.keys(releases);
console.log(obj); //test
const [o, a, or] = obj;
//
// saving the values of the object properties in a variable
let obj2 = Object.values(releases);
console.log(obj2); // test
const [[u, j], { US: u_price, JAP: j_price }] = obj2;
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan
//

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim
//
console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD
//
console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD
//
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
