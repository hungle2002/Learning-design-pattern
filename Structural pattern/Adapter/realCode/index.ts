// client interface class
class Target {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

// adaptee class
class Adaptee {
  public specialRequest(): string {
    return "Adaptee: The default adaptee's behavior.";
  }
}

// adapter class
class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specialRequest();
    return "Adapter: (TRANSLATED) " + result;
  }
}

// function client code support all classes use Target interface
function clientCode(target: Target) {
  console.log(target.request());
}




// test
const normalTarget = new Target();
console.log('Client can user Target interface:');
clientCode(normalTarget);

// convert adaptee to target
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log('Client can user Adapter interface:');
clientCode(adapter);









