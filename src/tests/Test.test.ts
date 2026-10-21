import Filament from "../model/Filament";
import Product from "../model/Product";
import SaleService from "../services/SaleService";

let filamentTest: Filament = new Filament("Generic", "White", 1, 100, 1000);
let productTest: Product = new Product("decorative vase", filamentTest, 50);
let service: SaleService = new SaleService();

test("Calculate cost price", () => {
    let cost = service.sale(productTest);
    expect(cost).toBe(5);
});

test("calculate sale price with margin 100%", () => {
    let salePrice = productTest.calculateSalePrice();
    expect(salePrice).toBe(10);
});

test("calculate sale price with margin 50%", () => {
    let salePrice = productTest.calculateSalePrice(50);
    expect(salePrice).toBe(7.5);
});
