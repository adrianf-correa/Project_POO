import Filament from "../model/Filament";
import Printer from "../model/Printer";
import Product from "../model/Product";

export default class Database {
    public filaments: Filament[] = [];
    public printers: Printer[] = [];
    public products: Product[] = [];
}
