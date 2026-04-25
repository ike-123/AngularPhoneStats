import { Component, signal } from '@angular/core';
import { ChildComponent } from '../components/child/child.component';

@Component({
  selector: 'app-home',
  imports: [ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  message = signal("This is a message from home")
}
