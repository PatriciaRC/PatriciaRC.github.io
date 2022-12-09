import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <section class="hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Hi! My name is Serena
      </p>
      <p class="subtitle">
        I'm a graphic designer and photographer from California.<br>
        Nice to meet you!
      </p>
    </div>
  </div>
</section>
  `,
  styles: [`
  .hero {
    background-image: url('/assets/img/fotohome.jpg') !important;
    background-size: cover;
    background-position: center center;
  }

  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
