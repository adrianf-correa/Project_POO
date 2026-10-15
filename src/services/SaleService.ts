import Product from "../model/Product";

export default class SaleService{
    public sale(product: Product) {
        if (product) {
            product.calculateProductCost();
            console.log(`Product cost: ${product.calculateProductCost()}`)
        }
    }     
}