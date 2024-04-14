class Context {
  private strategy: Stragery;

  constructor(strategy: Stragery) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Stragery){
    this.strategy = strategy;
  }

  public doSomething(): void {
    console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
    const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
    console.log(result.join(','));
  }
}

interface Stragery {
  doAlgorithm(list: string[]): string[];
}

class SortStragery implements Stragery {
  public doAlgorithm( list: string[] ): string[] {
    list.sort();
    return list;
  }
}

class ReverseStragery implements Stragery {
  public doAlgorithm(list: string[]): string[] {
    list.reverse();
    return list;
  }
}


const sortStragery = new SortStragery();
const context = new Context(sortStragery);
context.doSomething();

const reverseStragery = new ReverseStragery();
context.setStrategy(reverseStragery);
context.doSomething();






