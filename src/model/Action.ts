import Movie from "./Movie";

export default class Action extends Movie{

    private subject: string = "";
    private director: string = ""

    public getSubject(): string{
        return this.subject;
    }
    public setSubject(subject: string): void{
        this.subject = subject;
    }

    public getDirector(): string{
        return this.director;
    }
    public setDirector(director: string): void{
        this.director = director;
    }

    public showData(): void {
        super.showData();
        console.log(`Subject: ${this.subject}\n`);
    }
}