class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    return this.implementation.operationImplementation();
  }
}

class ExtendAbstraction extends Abstraction {
  public operation(): string {
    return `Extended: ${this.implementation.operationImplementation()}`;
  }
}


interface Implementation {
  operationImplementation(): string;
}

class ConreteImplementationA implements Implementation {
  operationImplementation(): string {
    return "The result of ConreteImplementationA";
  }
}

class ConreteImplementationB implements Implementation {
  operationImplementation(): string {
    return "The result of ConreteImplementationB";
  }
}

function clientCode (abstractionClass : Abstraction) {
  console.log(abstractionClass.operation());
}



let implementation = new ConreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

implementation = new ConreteImplementationB();
abstraction = new ExtendAbstraction(implementation);
clientCode(abstraction);


