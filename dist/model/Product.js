"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, filament, filamentAmount, salePrice) {
        this.name = name;
        this.filament = filament;
        this.filamentAmount = filamentAmount;
        this.salePrice = salePrice;
    }
    calculateProductCost(filamentAmount) {
        let costPerGram = this.filament.getPrice() / this.filament.getWeight();
        let amount = filamentAmount;
        if (amount === undefined) {
            amount = this.filamentAmount;
        }
        return costPerGram * amount;
    }
}
exports.default = Product;
