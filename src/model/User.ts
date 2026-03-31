import Movie from "./Movie";

export default class User {
    private name: string = "";
    private email: string = "";
    private password: string = ""
    private plan: string = "";
    private favorites: Movie[] = [];

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }
    public setEmail(email: string): void {
        this.email = email;
    }

    public getPlan(): string {
        return this.plan;
    }
    public setPlan(plan: string): void {
        this.plan = plan;
    }

    public addFavorite(movie: Movie): void {
        this.favorites.push(movie);
        console.log(`Movie "${movie.getTitle()}" added to favorites!`);
    }

    public showClientData(): void {
        console.log(`
            Name: ${this.name}
            Email: ${this.email}
            Plan: ${this.plan}
            Favorites List: ${this.favorites}`);
    }
}