// To run
// npm install -g typescript ts-node
// ts-node client/typeScript/features/annotations/classes.ts

class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("honk honk");
  }
}

class Car extends Vehicle {
  myCar(carType: string) {
    console.log(carType);
  }
  honk(): void {
    console.log("honk honk honk");
  }
}

class Building {
  protected build(): void {
    console.log("We are building something right now");
  }

  built(): void {
    console.log("We just built a building");
  }
  protected building(): void {
    console.log("We are in the process of building something");
  }
}

class Castle extends Building {
  color: string;

  constructor(color: string, public stone: string) {
    super();
    this.color = color;
  }

  build(): void {
    console.log("We are building a castle");
  }

  // override
  built(): void {
    console.log("We just built a castle");
  }

  building_(): void {
    this.building();
  }
}

const castle = new Castle("red", "brick");
castle.building_();
castle.build();
castle.built();

const vehicle = new Vehicle();
const car = new Car();

car.myCar("Honda Civic");
vehicle.drive();
