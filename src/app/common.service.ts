import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  // subject create

  count:number = 0;
  countSub$:BehaviorSubject<number> = new BehaviorSubject(0);

  // set
  setCount(){
    this.count++;
    this.countSub$.next(this.count);
  }

  // get
  
  getCount(){
    return this.countSub$.asObservable();
  }
 
}
