export class Student {
    private sName:String;
    private sAge:number;
    private sDistric:string;

    constructor(sName:string,sAge:number,sDistrict:string){
        this.sName=sName;
        this.sAge:sAge;
        this.sDistrict=sDistrict;
    }

 function setStudentName(name:string){
    this.sName=name;
 }
 public setStudentAge(age:number){
    this.sAge=age;
 }
 public setStudentDistrict(district:string){
    this.sDistrict=district;

 }

  public getStudentName(){
    return this.sName;
  }

  public getStudentAge(){
    return this.sAge;

  }
  punlic getStudentDistrict(){
    return this.sDistric;
  }
  
}