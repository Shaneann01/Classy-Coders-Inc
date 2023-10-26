class Employees {
  #salary;
  #isHired;
  static allEmployees = [];

  static getEmployees() {
    return Employees.allEmployees;
  }

  static getTotalPayroll() {
    let total = 0;
    for (let x of Employees.allEmployees) {
      let salary = x.getSalary();
      console.log(x.getSalary());
      total += salary;
    }
    return total;
  }

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employees.allEmployees.push(this);
  }
  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary = amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    command = command.toLowerCase();
    if (command !== "hire") {
      this.#isHired = false;
    }
  }
}

module.exports = {
  Employees,
};
