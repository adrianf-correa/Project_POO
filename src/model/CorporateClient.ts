import Client from "./Client";

export default class CorporateClient extends Client {
    private cnpj: string;
    private corporateName: string;

    constructor (name: string, phoneNumber: string, cnpj: string, corporateName: string){
        super(name, phoneNumber);
        this.cnpj = cnpj;
        this.corporateName = corporateName;
    }

    public getIdentifier(): string{
        return this.cnpj;
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public setCnpj(cnpj: string): void {
        this.cnpj = cnpj;
    }

    public getCorporateName(): string {
        return this.corporateName;
    }

    public setCorporateName(corporateName: string): void {
        this.corporateName = corporateName;
    }
}
