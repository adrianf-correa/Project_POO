import Animal from "./Animal";

export default class Dog extends Animal{
   private breed!: string;
   
   public setBreed(breed: string){
      this.breed = breed;
   }

   public getBreed(): string{
      return this.breed;
   }
}