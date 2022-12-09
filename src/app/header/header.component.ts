import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<nav class="navbar is-dark">
  <div class="navbar-brand">
    <!-- logo -->
    <a class="navbar-item" routerLink="/">
    <img src="assets/img/logo.svg" width="" height="">
    </a>
  </div>
  <div class="navbar-start">
    <!-- navbar content -->
    <a class="navbar-item" routerLink="/about">
      About Me
</a>
<!-- dropdown -->
<div class="navbar-item has-dropdown is-hoverable">
<a class="navbar-link" routerLink="/mywork">
          My Work
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" routerLink="/mywork/y2020">
            2020
          </a>
          <a class="navbar-item" routerLink="/mywork/y2021">
            2021
          </a>
          <a class="navbar-item" routerLink="/mywork/y2022">
            2022
          </a>

        </div>

</div>
  </div>
  <div class="navbar-end">
    <!-- contact button -->
    <a class="navbar-item" routerLink="/contact">
      <a class="button is-warning is-hovered">
        Contact
</a>
    </a>
  </div>

</nav>
    
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
