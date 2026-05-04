import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient:HttpClient) { }

  getVehicles():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1");
  }

   getVehicle(id:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

   getSortVehicles(column:string, order:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

   getFilteredVehicles(term:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

    getpageVehicles(page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);
  }

    getVehiclesWithParams(term:string, column:string, order:string ,page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page);
  }

  createVehicle(vehicle:any):Observable<any>{
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vehicle);
  }

   editVehicle(id:string,vehicle:any):Observable<any>{
    return this.httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,vehicle);
  }

    deleteVehicles(id:string):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  
}
