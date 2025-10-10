import {Student} from './Day01/student.js';



function main(){
    const student1 = new Student("Jacksparrow",24,"Colombo");
console.log(student1.getStudentName());
student1.getStudentName("kumar");
console.log(student1.getStudentName());
}

main();
import {Student} from './Day01/Circle.js';
void  function functionForClassCircle(){
    const circle1= new Circle(1);
    const circle2= new Circle(25);
    const circle3= new Circle(125);

    console.log("the radius value of circle1 is:"+circle1.getRadius());
    console.log("the radius value of circle2 is:"+circle2.getRadius());
    console.log("the radius value of circle3 is:"+circle3.getRadius());

    console.log("the area of circle1="+circle1.getArea());
    console.log("the area of circle1="+circle2.getArea());
    console.log("the area of circle1="+circle3.getArea());

    console.log("\n");
    console.log("the primiter of circle 1 ="+circle1.getPerimiter());
    console.log("the primiter of circle 2 ="+circle2.getPerimiter());
    console.log("the primiter of circle 3 ="+circle3.getPerimiter());
}
