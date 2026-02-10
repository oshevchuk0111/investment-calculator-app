import { HeaderComponent } from './header/header';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInputComponent } from "./user-input/user-input";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  protected readonly title = signal('investment-calculator-app');
}
