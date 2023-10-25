class Employees {
  #salary;
  #isHired;
  static allEmployees = [];

  static getEmployees() {
    return this.allEmployees;
  }

  static getTotalPayroll() {
    let total = 0;
    total = this.Employees["#salary"];
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
