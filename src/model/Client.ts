import Person from "./Person";

export default abstract class Client extends Person {

    constructor(name: string, phoneNumber: string) {
        super(name, phoneNumber);
    }

    public abstract getIdentifier(): string;
}
