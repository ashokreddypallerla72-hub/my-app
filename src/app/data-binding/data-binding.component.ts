import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {


  name:string = "raj";
  age:number = 20;
  address:string = "hyd";

  isInValid:boolean =true;

  phone:string = "+91";

  submit(){
    alert("submitted");
  }

}
