import IProduct from "../interfaces/IProduct";
import ISale from "../interfaces/ISale";
import Attendant from "./Attendant";
import Client from "./Client";


export default class Sale implements ISale {
    constructor(
        public client: Client,
        public attendant: Attendant,
        public product: IProduct,
        public quantity: number,
        public totalValue: number
    ) {}
}
