const carMakers: string[] = ["ford", "toyota", "chevy"];
const carMaker: string[] = [];
const dates = [new Date(), new Date()];
let carsByMake: string[][];
carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car_ = carMakers[0];

// Prevent incompatible values
//carMakers.push(100)

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030 -10-10");
importantDates.push(new Date());
