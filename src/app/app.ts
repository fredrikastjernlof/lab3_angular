import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNav } from "./main-nav/main-nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lab3_Angular');

  focusMainContent() {
    const mainContent = document.getElementById('main-content');
    mainContent?.focus();
  }
}
