import { geometric } from "./geometric";



export class Rectangle extends geometric {

  private width: number;

  private height: number;



  constructor(width: number = 1, height: number = 1, color?: string, filled?: boolean) {

    super(color, filled);

    this.width = width;

    this.height = height;

  }



  public getWidth(): number {

    return this.width;

  }



  public setWidth(width: number): void {

    this.width = width;

  }



  public getHeight(): number {

    return this.height;

  }



  public setHeight(height: number): void {

    this.height = height;

  }



  public getArea(): number {

    return this.width * this.height;

  }



  public getPerimeter(): number {

    return 2 * (this.width + this.height);

  }



  public toString(): string {

    return `Rectangle: width = ${this.width}, height = ${this.height}, ` + super.toString();

  }

}


