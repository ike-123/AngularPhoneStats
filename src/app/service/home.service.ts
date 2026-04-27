import { inject, Injectable } from '@angular/core';
import { PhoneSpecs } from '../model/Phonespecs.type';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class HomeService {

  http = inject(HttpClient)

  PhoneSpecsArray: Array<PhoneSpecs> = [
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      price: "£999"
    }
  ]
  constructor() { }

  GetPhones() {
    const url = "https://icanhazdadjoke.com/search"
    return this.http.get(url,{headers:{Accept:'application/json'}});
  }
}
