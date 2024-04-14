abstract class VehicleCreator {
  public abstract factoryMethod(): Vehicle;

  public checkRun(): void {
    const vehicle = this.factoryMethod();
    vehicle.run();
  }
}

class CarCreator extends VehicleCreator {
  public factoryMethod(): Vehicle {
    return new Car();
  }
}

class BikeCreator extends VehicleCreator {
  public factoryMethod(): Vehicle {
      return new Bike();
  }
}

interface Vehicle {
  run(): void;
}

class Car implements Vehicle {
  public run(): void {
    console.log('Car is running');
  }
}

class Bike implements Vehicle {
  public run(): void {
    console.log('Bike is running');
  }
}



function clientCode(creator: VehicleCreator) {
  // ...
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  creator.checkRun();
  // ...
}


// Test code
clientCode(new CarCreator())
clientCode(new BikeCreator())












