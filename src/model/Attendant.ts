import Person from "./Person";

export default class Attendant extends Person {
    private employeeCode: string;

    constructor(name: string, phoneNumber: string, employeeCode: string) {
        super(name, phoneNumber);
        this.employeeCode = employeeCode;
    }

    public getEmployeeCode(): string {
        return this.employeeCode;
    }

    public setEmployeeCode(employeeCode: string): void {
        this.employeeCode = employeeCode;
    }
}
