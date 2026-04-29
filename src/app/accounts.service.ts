import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpClient:HttpClient) { }

  getAccounts():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }

  
  deleteAccounts(id:string):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }

    getFilteredAccounts(term:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

     getsortAccounts(column:string,order:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortby="+column+"&order="+order);
  }
  pagedAccounts():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=1");
  }

    getpagedAccounts(page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page);
  }


}
