import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrl: './mycomponent.component.css'
})
export class MycomponentComponent {
  sum :number;
  sub : number;
  mul:number;
  div:number;
  constructor( private calc : CalculatorService){
    this.sum =calc.getAddition(10,20);
    this.sub =calc.getSubtraction(20,10);
    
    this.mul=calc.getMultiplication(10,20);
    this.div=calc.getDivision(20,10);
}
}

  