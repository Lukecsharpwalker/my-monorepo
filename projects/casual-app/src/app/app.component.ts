import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'casual-app';
  name(): string {
    console.log('fire in the hole')
    return 'ssg-app';
  }
  re() {
    console.log('re')
  }
}
