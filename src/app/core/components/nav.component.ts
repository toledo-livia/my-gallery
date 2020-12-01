import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav class="menu">
    <p class="menu-label">Menu</p>
    <ul class="menu-list">
      <a routerLink="/photos" routerLinkActive="router-link-active">
        <span>Home</span>
      </a>
    </ul>
  </nav>
  `
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
