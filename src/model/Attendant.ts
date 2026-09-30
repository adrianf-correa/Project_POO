import Person from "./Person";

export default class Attendant extends Person {
    private employeeID: string;

    constructor(name: string, phoneNumber: string, employeeID: string) {
        super(name, phoneNumber);
        this.employeeID = employeeID;
    }

    public getEmployeeID(): string {
        return this.employeeID;
    }

    public setEmployeeID(employeeID: string): void {
        this.employeeID = employeeID;
    }

    public getIdentifier(): string {
        return this.employeeID;
    }
}
