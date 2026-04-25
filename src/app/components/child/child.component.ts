import { Component, input } from '@angular/core';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  myMessage = input()
}
