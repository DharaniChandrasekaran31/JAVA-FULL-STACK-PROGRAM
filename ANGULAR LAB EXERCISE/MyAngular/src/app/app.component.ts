import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sum : number;
  sub:number;
  mul:number;
  div:number;
  constructor( private calc : CalculatorService){
      this.sum =calc.getAddition(10,20);
      this.sub=calc.getSubtraction(20,10);
      this.mul=calc.getMultiplication(10,20);
      this.div=calc.getDivision(20,10);
    }
}

/*export class AppComponent {
  flag : boolean;
  vehicles: string [];
  selectedVehicle : string="";
  myStyle: {};
  myClass : string;


  constructor(){
    this.flag = true;
    this.vehicles =["TwoWheeler","ThreeWheeler","FourWheeler"];
    this.myStyle ={'width':'40%','border' : '2px solid pink'};
    this.myClass ="Myclass1";
  }

  changeFlag(){
    this.flag = ! this.flag;
  }
  setSelectedItem(vec:string){
this.selectedVehicle=vec;
  }
  changeClass(){
    this.myClass="Myclass2";
  }*/
 /* name : string;
  age :number;
  email : string;
  txtColor: string;
  imgPath : string;
  fname : string="";

  constructor(){
    this.name="prathi";
    this.age=20;
    this.email="prathi@gmail.com"
    this.txtColor="green";
    this.imgPath="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-628.png?sfvrsn=bf64b1ee_3"
  }
  getAddition(a:number,b:number){
    let sum =a+b;
    return sum;
  }
  changeName(){
    this.name="vijay";
  }
  changeEmail(){
    this.email="vijay@gmail.com";
  }
  changeAge(){
    this.age=40;
  }
  changeImg(){
      this.imgPath="https://www.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png";
  }
  title = 'MyAngularProject1';
}*/