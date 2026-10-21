import Filament from "./Filament";

import IProduct from "../interfaces/IProduct";

export default class Product implements IProduct{

    constructor(
        public name: string,
        public filament: Filament,
        public filamentAmount: number,
    ) {}

    public calculateProductCost(filamentAmount?: number): number {
        let costPerGram = this.filament.getPrice() / this.filament.getWeight();
        let amount = filamentAmount;
        if (amount === undefined){
            amount = this.filamentAmount;
        }
        return costPerGram * amount;
    }
    public calculateSalePrice(proftiMargin?: number): number {
        let cost = this.calculateProductCost();
        if (proftiMargin === undefined){
            proftiMargin = 100
        }
        return cost * (1 + proftiMargin / 100)
    }
}
