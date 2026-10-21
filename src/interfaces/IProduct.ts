import Filament from "../model/Filament";

export default interface IProduct {
    name: string;
    filament: Filament;
    filamentAmount: number;

    calculateProductCost(filamentAmount?: number): number;
    calculateSalePrice(proftiMargin?: number): number;
}