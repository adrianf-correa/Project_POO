import Filament from "../model/Filament";

export default interface IProduct {
    name: string;
    filament: Filament;
    filamentAmount: number;
    salePrice: number;

    calculateProductCost(filamentAmount?: number): number;
}