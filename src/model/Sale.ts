import Attendant from "./Attendant";
import Client from "./Client";
import Product from "./Product";

export default class Sale {
    private client: Client;
    private attendant: Attendant;
    private product: Product;
    private quantity: number;
    private totalValue: number;

    constructor(
        client: Client,
        attendant: Attendant,
        product: Product,
        quantity: number,
        totalValue: number
    ) {
        this.client = client;
        this.attendant = attendant;
        this.product = product;
        this.quantity = quantity;
        this.totalValue = totalValue;
    }

    public getClient(): Client {
        return this.client;
    }

    public setClient(client: Client): void {
        this.client = client;
    }

    public getAttendant(): Attendant {
        return this.attendant;
    }

    public setAttendant(attendant: Attendant): void {
        this.attendant = attendant;
    }

    public getProduct(): Product {
        return this.product;
    }

    public setProduct(product: Product): void {
        this.product = product;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public getTotalValue(): number {
        return this.totalValue;
    }

    public setTotalValue(totalValue: number): void {
        this.totalValue = totalValue;
    }
}
