const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

delete myObj.country;

// Write Your Code Here
Object.defineProperties(myObj, {
  id: {
    writable: true,
    enumerable: false,
    configurable: true,
  },
  score: {
    writable: false,
    enumerable: true,
    configurable: true,
  },
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// ("username => Elzero");
// ("score => 1000");
// {username: 'Elzero', score: 1000, id: 100}
