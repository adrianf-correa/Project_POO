import Filament from "./Filament";
import Printer from "./Printer";

export default class Product {
    private name: string;
    private filament: Filament;
    private printer: Printer;
    private filamentAmount: number;
    private printingTime: number;
    private salePrice: number;

    constructor(
        name: string,
        filament: Filament,
        printer: Printer,
        filamentAmount: number,
        printingTime: number,
        salePrice: number
    ) {
        this.name = name;
        this.filament = filament;
        this.printer = printer;
        this.filamentAmount = filamentAmount;
        this.printingTime = printingTime;
        this.salePrice = salePrice;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getFilament(): Filament {
        return this.filament;
    }

    public setFilament(filament: Filament): void {
        this.filament = filament;
    }

    public getPrinter(): Printer {
        return this.printer;
    }

    public setPrinter(printer: Printer): void {
        this.printer = printer;
    }

    public getFilamentAmount(): number {
        return this.filamentAmount;
    }

    public setFilamentAmount(filamentAmount: number): void {
        this.filamentAmount = filamentAmount;
    }

    public getPrintingTime(): number {
        return this.printingTime;
    }

    public setPrintingTime(printingTime: number): void {
        this.printingTime = printingTime;
    }

    public getSalePrice(): number {
        return this.salePrice;
    }

    public setSalePrice(salePrice: number): void {
        this.salePrice = salePrice;
    }

    public calculateProductionCost(): number {
        const costPerGram: number = this.filament.getPrice() / this.filament.getWeight();
        return costPerGram * this.filamentAmount;
    }
}
