import Attendant from "../model/Attendant";
import Client from "../model/Client";
import IProduct from "./IProduct";

export default interface ISale {
    client: Client;
    attendant: Attendant;
    product: IProduct;
    quantity: number;
    totalValue: number;
}