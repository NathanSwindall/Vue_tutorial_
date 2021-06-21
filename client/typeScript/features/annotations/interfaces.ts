// To run
// npm install -g typescript ts-node
// ts-node client/typeScript/features/annotations/interfaces.ts

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

interface Monster {
  monster(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle);
};

const drink = {
  color: "red-brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This ${this.color} drink has ${this.sugar}g of sugar in it.`;
  }
};

const printMonster = (monster: Monster) => {
  const myMonster = monster.monster();
  console.log(`Hi, my name is ${myMonster} the monster`);
};

const printReportable = (report: Reportable) => {
  console.log(report.summary());
};

// printVehicle(oldCivic);
// printVehicle2(oldCivic);
// printMonster({
//   monster(): string {
//     return "Freddie Four Finger";
//   }
// });

printReportable(drink);
