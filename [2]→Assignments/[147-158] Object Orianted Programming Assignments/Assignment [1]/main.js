class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return`Car Is Running`;
  }
  // using getter
  get running() {
    return `car is running`
  }
  stop() {
    return `Car Has Stopped`;
  }
  // using getter
  get stopping() {
    return `car is stopping`
  }
}

let carOne = new Car("Mg", 2022, 420000);
console.log(`Car ONe Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run())
console.log(carOne.running)

// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"
