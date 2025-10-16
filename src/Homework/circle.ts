import { geometric } from "./geometric";



export class Circle extends geometric {

  private radius: number;



  constructor(radius: number = 1, color?: string, filled?: boolean) {

    super(color, filled);

    this.radius = radius;

  }



  public getRadius(): number {

    return this.radius;

  }



  public setRadius(radius: number): void {

    this.radius = radius;

  }



  public getArea(): number {

    return Math.PI * this.radius * this.radius;

  }



  public getPerimeter(): number {

    return 2 * Math.PI * this.radius;

  }



  public getDiameter(): number {

    return this.radius * 2;

  }



  public toString(): string {

    return `Circle: radius = ${this.radius}, ` + super.toString();

  }

}