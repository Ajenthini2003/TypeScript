export abstract class Geometric {

  private color: string;

  private filled: boolean;

  private dateCreated: Date;



  constructor(color: string = "white", filled: boolean = false) {

    this.color = color;

    this.filled = filled;

    this.dateCreated = new Date();

  }



  public getColor(): string {

    return this.color;

  }



  public setColor(color: string): void {

    this.color = color;

  }



  public isFilled(): boolean {

    return this.filled;

  }



  public setFilled(filled: boolean): void {

    this.filled = filled;

  }



  public getDateCreated(): Date {

    return this.dateCreated;

  }



  public toString(): string {

    return `created on ${this.dateCreated.toISOString()}, color: ${this.color}, filled: ${this.filled}`;

  }



  public abstract getArea(): number;

  public abstract getPerimeter(): number;

}

1:27
