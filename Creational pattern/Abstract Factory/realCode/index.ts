interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

class ConreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConreteProductB1();
  }
}

class ConreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConreteProductB2();
  }
}

interface AbstractProductA {
  methodA(): string;
}

class ConreteProductA1 implements AbstractProductA {
  methodA(): string {
    return 'The result of medthodA1';
  }
}

class ConreteProductA2 implements AbstractProductA {
  methodA(): string {
    return 'The result of methodA2'
  }
}

interface AbstractProductB {
  methodB(): string;
  collaborateMethodB(collaborator: AbstractProductA): string;
}

class ConreteProductB1 implements AbstractProductB {
  methodB(): string {
    return 'The result of methodB1';
  }

  collaborateMethodB(collaborator: AbstractProductA): string {
      const resultA = collaborator.methodA();
      return `The result of the collaborating methodB1 with A: ${resultA}`
  }
}

class ConreteProductB2 implements AbstractProductB {
  methodB(): string {
      return 'The result of methodB2';
  }

  collaborateMethodB(collaborator: AbstractProductA): string {
      const resultA = collaborator.methodA();
      return `The result of the collaborating methodB2 with A: ${resultA}`
  }
}

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.methodB());
  console.log(productB.collaborateMethodB(productA));
}

const factory1 = new ConreteFactory1();
console.log('Clientcode using the factory1');
clientCode(factory1);


const factory2 = new ConreteFactory2();
console.log('Clientcode using the factory2');
clientCode(factory2);
