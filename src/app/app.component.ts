import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentboxComponent } from './contentbox/contentbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
