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
    getClient() {
        return this.client;
    }
    setClient(client) {
        this.client = client;
    }
    getAttendant() {
        return this.attendant;
    }
    setAttendant(attendant) {
        this.attendant = attendant;
    }
    getProduct() {
        return this.product;
    }
    setProduct(product) {
        this.product = product;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getTotalValue() {
        return this.totalValue;
    }
    setTotalValue(totalValue) {
        this.totalValue = totalValue;
    }
}
exports.default = Sale;
