import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']


})
export class FlipkartComponent {
  flipkart : any = [];
  constructor (private flipkartService : FlipkartService) {
    flipkartService.getflipkart ().subscribe(
      (data : any) =>{
        this.flipkart = data;
      },
      (err : any) =>{
        alert("Internal server error");
      }
    )
  }

}
