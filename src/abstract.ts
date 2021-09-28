interface CanDisplayName {
  displayName: () => void;
}

function DisplayName(human: CanDisplayName) {
  human.displayName();
}

abstract class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  displayName() {
    console.log(this.name);
  }

  abstract find(string: string): Person;
}

class Employee extends Person {
  public empCode: number;

  constructor(name: string, code: number) {
    super(name);
    this.empCode = code;
  }

  find(name: string): Person {
    return new Employee(name, 1);
  }
}

let James: Person = new Employee("James", 100);
let Steve: Person = James.find("Steve");

DisplayName(James);
DisplayName(Steve);
