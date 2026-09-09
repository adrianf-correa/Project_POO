export default class Printer {
    private brand: string;
    private model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    public getBrand(): string {
        return this.brand;
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }
}
