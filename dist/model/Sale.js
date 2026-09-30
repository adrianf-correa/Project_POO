"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sale {
    constructor(client, attendant, product, quantity, totalValue) {
        this.client = client;
        this.attendant = attendant;
        this.product = product;
        this.quantity = quantity;
        this.totalValue = totalValue;
    }
}
exports.default = Sale;
