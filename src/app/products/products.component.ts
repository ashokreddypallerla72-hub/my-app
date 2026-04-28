import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent {
   products:any = [
  { productName: "Wireless Mouse", price: 25.99, rating: 4.5 },
  { productName: "Bluetooth Speaker", price: 49.99, rating: 4.3 },
  { productName: "Laptop Backpack", price: 39.50, rating: 4.6 },
  { productName: "Smart Watch", price: 129.99, rating: 4.4 },
  { productName: "USB-C Charger", price: 19.99, rating: 4.7 },
  { productName: "Noise Cancelling Headphones", price: 89.99, rating: 4.5 },
  { productName: "Gaming Keyboard", price: 59.99, rating: 4.2 },
  { productName: "Fitness Band", price: 34.99, rating: 4.1 },
  { productName: "Portable SSD 1TB", price: 99.99, rating: 4.8 },
  { productName: "LED Desk Lamp", price: 27.49, rating: 4.4 }
];

  



product:any = this.products;

name:string = "";
price:number =0;
rating:number =0;
freedelivery:number = 0;

term:string="";

create(){
  let product = {
    id :9999,
    productName :"",
    price:0,
    // this.freedelivery :this.freedelivery
  } 
  this.product.unshift(product);
  
}





delete(i:any){
  this.product.splice(i,1);
  
}
pricelowtohigh(){
    this.products.sort((a:any, b:any)=>a.price-b.price);

}

pricehightolow(){
   this.products.sort((a:any, b:any)=>b.price-a.price);
  
}

ratinglowtohigh(){
   this.products.sort((a:any, b:any)=>a.rating-b.rating);

}

ratinghightolow(){
  this.products.sort((a:any, b:any)=>b.rating-a.rating);

}

applydisscount(){
  this.products = this.products.map((product:any)=>{
    product.disscount = product.disscount+20;
    return product;
  })

}

pricewithdeliverycharges(){
  this.products = this.products.map((product:any)=>{
    product.deliverycharge = product.deliverycharge+30;
    return product;
     
  })

}

freeDelivery:boolean= true;

totalprice(){
  let totalprice = this.products.reduce((agg:number,product:any)=>agg+product.total,0);
  alert("totalprice : +total");

}

totalcartitems(){
   let totalcartitems = this.products.reduce((agg:number,product:any)=>agg+product.total,0);
  alert("total cartitems : "+totalcartitems);


}

search(){
  this.products = this.products.filter((product:any)=>product.productName.includes(this.term));
}

onlyfreedelivery(){

}
}
