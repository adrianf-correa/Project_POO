import Attendant from "../model/Attendant";
import Client from "../model/Client";
import Filament from "../model/Filament";
import Printer from "../model/Printer";
import Product from "../model/Product";
import Sale from "../model/Sale";

export default class Database {
    public attendants: Attendant[] = [];
    public clients: Client[] = [];
    public filaments: Filament[] = [];
    public printers: Printer[] = [];
    public products: Product[] = [];
    public sales: Sale[] = [];
}
