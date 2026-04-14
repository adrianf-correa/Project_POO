export default class Animal{
   
   private petName!: string;
   private serviceCost!: number;
  
   public setPetName(petName: string){
      this.petName =petName;
   }
   public getPetName(): string{
      return this.petName;
   }
    public setServiceCost(serviceCost: number){
      this.serviceCost = serviceCost;
   }
   public getServiceCost(): number{
      return this.serviceCost;
   }


}