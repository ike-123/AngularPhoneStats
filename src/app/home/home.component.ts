import { Component, inject, OnInit, signal } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Joke } from '../model/Phonespecs.type';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  homeService = inject(HomeService)

  jokes = signal<Array<Joke>>([]);

  counter = signal(0);

  ngOnInit(): void {
    // console.log(this.homeService.GetPhones());

    this.homeService.GetPhones().subscribe((value: any) => {
      // console.log(value.results);
      this.jokes.set(value.results)

    })
  }

  IncrementCounter():void{

    this.counter.set(this.counter() + 1);
  }


}
