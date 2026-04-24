import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  
  states:string[] = ["Telangana", "Andhra", "karnataka", 'Delhi'];

  users:any =[
    {name:'ram', age:20},
    {name:'raj', age:30},
    {name:'sham', age:40},
    {name:'john', age:50},
    {name:'ravi', age:60},

  ];


  isShow:boolean =true;

}
