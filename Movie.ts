export default class Movie{
    
    private title: string = "";
    private category: string = "";
    private time: number = 0;
    private year: number = 0;

    public getTitle(): string{
        return this.title;
    }
    public setTitle(title: string): void{
        this.title = title;
    }

    public getCategory(): string{
        return this.category;
    }
    public setCategory(category: string): void{
        this.category = category;
    }

    public getTime(): number{
        return this.time;
    }
    public setTime(time: number): void{
        this.time = time;
    }

    public getYear(): number{
        return this.year;
    }
    public setYear(year: number): void{
        this.year = year;
    }


    public showData(): void{
        console.log(`Title of movie: ${this.title};\n 
            Category: ${this.category};
            Duration: ${this.time} min;\n 
            Year of release: ${this.year}\n`);
    }
}