const dring = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

// tuples aren't very useful
const pepsi: [string, boolean, number] = ["brown", true, 40]; //tuple
const coke: Drink = ["clear", true, 0];
const tea: Drink = ["brown", true, 23];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
