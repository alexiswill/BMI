import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMI Calculator';
  
  public num1: number;
  public num2: number;
  public num3: number;
  public result: number;
  
  
  calculate(){


    
    this.result = (this.num1 / ((this.num2 * 12) + this.num3) ** 2) * 703;
   
    
  }
  
  
  }



