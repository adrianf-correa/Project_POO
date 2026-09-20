import { FilamentType } from "../enum/FilamentType";

export default class Filament {
    private brand: string;
    private color: string;
    private type: FilamentType;
    private price: number;
    private weight: number;

    constructor(brand: string, color: string, type: FilamentType, price: number, weight: number) {
        this.brand = brand;
        this.color = color;
        this.type = type;
        this.price = price;
        this.weight = weight;
    }

    public getBrand(): string {
        return this.brand;
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getType(): FilamentType {
        return this.type;
    }

    public setType(type: FilamentType): void {
        this.type = type;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }
}
