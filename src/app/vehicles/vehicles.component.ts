import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  vehicles:any =[];

  constructor(private vehicleService:VehicleService){
    vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal serve errpr");
      }
    )
  }


  column:string ="";
  order:string ="";

  sortVehicles(){
    this.vehicleService
    .getSortVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },

      (err:any)=>{
        alert("internal server error");
      }
    )
  }


  
  pageVehicles(page:number){
    this.vehicleService.getpageVehicles(page).subscribe(
  
      (data:any)=>{
        this.vehicles = data;
      },

      (err:any)=>{
        alert("internal server error");
      }
    )
  }




  
  deleteVehicle(id:string){
    this.vehicleService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert('delete failed');
      }
    )
  }


   term:string ="";
  
  filterVehicles(){
    this.vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
       
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

}
