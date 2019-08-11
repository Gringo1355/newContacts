import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
  private subject = new Subject<number>();
  constructor() { }

  public sendId(id:number):void{
      this.subject.next(id);
  }
  public getId(): Observable<number>{
    return this.subject.asObservable();
  }
}
