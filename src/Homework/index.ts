import { Circle } from "./Circle";

import { Rectangle } from "./Rectangle";



const c = new Circle(5, "red", true);

console.log(c.toString());

console.log("Circle area:", c.getArea(), "perimeter:", c.getPerimeter());



const r = new Rectangle(4, 6, "blue", false);

console.log(r.toString());

console.log("Rectangle area:", r.getArea(), "perimeter:", r.getPerimeter());

