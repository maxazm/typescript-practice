class Department {
    name: string;
    private employees: string[] = [];



    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log("Department: " + this.name);
    }

    addEmployee(employee: string) {
        console.log("Department: " + this.name);
        this.employees.push(employee);
    }

    printEmployeeInformation(this: Department) {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();

const accountingCopy  = { name: "DUMMY",  describe : accounting.describe };
// accountingCopy.describe(); 

accounting.addEmployee("Anna");
accounting.addEmployee("Max");
accounting.printEmployeeInformation();

// accounting.employees[1] = "ams"; 