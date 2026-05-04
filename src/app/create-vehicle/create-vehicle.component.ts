import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

vehicleForm : FormGroup = new FormGroup({
  Vehicle : new FormControl(),
  manufacturer: new FormControl(),
  model : new FormControl(),
  type : new FormControl(),
  fuel : new FormControl(),
  color : new FormControl(),
  image : new FormControl(),

})
id:string = "";

constructor(private vehicleService:VehicleService, private activatedRoute:ActivatedRoute ){
  activatedRoute.params.subscribe(
    (data:any)=>{
      this.id=data.id;
      vehicleService.getVehicle(data.id).subscribe(
        (data:any)=>{
          this.vehicleForm.patchValue(data);
        }
      )
    }
  )
  
}



submit() {
  if (this.id){
    // edit
     this.vehicleService.editVehicle(this.id, this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("edited successfully");
        this.vehicleForm.reset();
      },
      (err:any)=>{
        alert("edit failed");

      }
    
    )
  
  }

  else{
    // create
    this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("created successfully");
        this.vehicleForm.reset();
      },
      (err:any)=>{
        alert("creation failed");

      }
    
    )

  }
 
  
}



}
