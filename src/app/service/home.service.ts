import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

type PhoneSpecs = {
  id:number
  name:string,
  price:string
}

export class HomeService {

  PhoneSpecsArray:Array<PhoneSpecs> = [
    {
      id:1,
      name:"iPhone 17 Pro Max",
      price:"£999"
    }
  ]
  constructor() { }
}
