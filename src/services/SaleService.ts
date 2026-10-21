import IProduct from "../interfaces/IProduct";

export default class SaleService{
    public sale(product: IProduct): number {
        if (product) {
            let cost = product.calculateProductCost();
            return cost;
        }
        return 0;
    }     
}