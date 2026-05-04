import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  Accounts : any = [];

  constructor(private AccountService : AccountsService){
    AccountService.getAccounts().subscribe(
      (data : any)=>{
        this.Accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  deleteAccountsbank(id:string){
    this.AccountService.deleteAccounts(id).subscribe(
      (data : any)=>{
        alert("Account deleted succesfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  term:string="";
  filterAccounts(){
    this.AccountService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.Accounts=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  column:string="";
  order:string="";
  sortAccounts(){
    this.AccountService.getsortAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.Accounts=data;
        
      },
      (err:any)=>{
        alert("Internal server error");
      }

    )
  }

    pageAccounts(page:number){
      this.AccountService.getpagedAccounts(page).subscribe(

        (data:any)=>{
        this.Accounts=data;
        
      },
      (err:any)=>{
        alert("Internal server error");
      }
      )

    }

      pageAccountsparameters(page:number=1){
      this.AccountService.getpagedAccountsparameter(page,this.order,this.term,this.column).subscribe(

        (data:any)=>{
        this.Accounts=data;
        
      },
      (err:any)=>{
        alert("Internal server error");
      }
      )

    }



}
