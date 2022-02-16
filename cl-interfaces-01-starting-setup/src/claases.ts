abstract class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];


    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    static createEmployee(name: string){
        return { name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        console.log("Department: " + this.name);
        this.employees.push(employee);
    }

    printEmployeeInformation(this: Department) {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admin: string[]) {
        super(id,  "IT");
        
    }

    describe() {
        console.log(`IT Department ID: ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport(){
        if (this.lastReport){
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value: string){
        if(!value){
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
        console.log("New report is accepted");
    }

    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    static getInstance(){ // singleton pattern
        if (this.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment("d3", []);
        return this.instance;
    }

    describe(){
        console.log(`Accounting Department ID: ${this.id}`);
    }

    addEmployee(name: string){
        if (name == "Max"){
            return;
        }
        this.employees.push(name);
    }
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports(this: AccountingDepartment) {
        console.log(this.reports);
    }
}

Math.pow(2,4); //static method
const employee1 = Department.createEmployee("Matt");
console.log(employee1);

// const accounting = new Department("d1", "Accounting");
// console.log(accounting);
// accounting.describe();

const it_department = new ITDepartment("d2", ["Max"]);
it_department.describe();


const accounting_department = AccountingDepartment.getInstance();
accounting_department.describe();
// console.log(accounting_department.mostRecentReport);
accounting_department.mostRecentReport = "Hello World";
accounting_department.addReport("Somethinig went wrong..");
console.log(accounting_department.mostRecentReport);
// accounting_department.describe();
// accounting_department.getReports();
accounting_department.addEmployee("Max");
accounting_department.addEmployee("Anna");
accounting_department.printEmployeeInformation();


// const accountingCopy  = { name: "DUMMY",  describe : accounting.describe };
// accountingCopy.describe(); 

// accounting.addEmployee("Anna");
// accounting.addEmployee("Max");
// accounting.printEmployeeInformation();

// accounting.employees[1] = "ams"; 