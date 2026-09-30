
export default abstract class Person {
    private name: string;
    private phoneNumber: string;

    constructor(name: string, phoneNumber: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    public abstract getIdentifier(): string;

    public getDescription(): string {
        return "Name: " + this.name + " | Phone: " + this.phoneNumber;
    }
}
