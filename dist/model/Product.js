"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, filament, printer, filamentAmount, printingTime, salePrice) {
        this.name = name;
        this.filament = filament;
        this.printer = printer;
        this.filamentAmount = filamentAmount;
        this.printingTime = printingTime;
        this.salePrice = salePrice;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getFilament() {
        return this.filament;
    }
    setFilament(filament) {
        this.filament = filament;
    }
    getPrinter() {
        return this.printer;
    }
    setPrinter(printer) {
        this.printer = printer;
    }
    getFilamentAmount() {
        return this.filamentAmount;
    }
    setFilamentAmount(filamentAmount) {
        this.filamentAmount = filamentAmount;
    }
    getPrintingTime() {
        return this.printingTime;
    }
    setPrintingTime(printingTime) {
        this.printingTime = printingTime;
    }
    getSalePrice() {
        return this.salePrice;
    }
    setSalePrice(salePrice) {
        this.salePrice = salePrice;
    }
    calculateProductionCost() {
        const costPerGram = this.filament.getPrice() / this.filament.getWeight();
        return costPerGram * this.filamentAmount;
    }
}
exports.default = Product;
