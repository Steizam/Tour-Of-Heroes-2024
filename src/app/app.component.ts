import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { LogoComponent } from './logo/logo.component';
import { FadeIn } from './animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, MessagesComponent, LogoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    FadeIn(800, true)
  ],
})
export class AppComponent {
  title = 'Tour of Heroes 2024';
}