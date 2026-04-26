import { Component, inject } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homeService = inject(HomeService)
}
