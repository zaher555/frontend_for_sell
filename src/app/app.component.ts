import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './features/shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'for_sell';
}
