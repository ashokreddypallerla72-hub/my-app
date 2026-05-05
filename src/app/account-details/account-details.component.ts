import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  constructor(private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe(
      (data:any)=>{
        alert(data.id);
      }
    )
  }

}
