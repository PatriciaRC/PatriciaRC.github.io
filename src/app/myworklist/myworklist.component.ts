import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myworklist',
  template: `
  

  <!-- hero title -->
  <section class="hero">
  <div class="hero-body">
    <p class="title">
      About my work
    </p>
    <p class="subtitle">
      Here you can check my previous work from 2020 to 2022. I like to photograph complex emotions in humans, their loved pets and even the elements of nature and the city.
    </p>
  </div>
</section>

<!-- Cards year -->
<div class="container">
<div class="columns is-multiline">

<!-- 2020 -->

  <div class="column is-one-third-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
              <img src="/assets/img/2020/pic4.jpg" alt="">
            </figure>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" routerLink="/mywork/y2020">
              2020
            </a>
        </footer>
</div>
</div>
<!-- 2021 -->

<div class="column is-one-third-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
              <img src="/assets/img/2021/pic1.jpg" alt="">
            </figure>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" routerLink="/mywork/y2021">
              2021
            </a>
        </footer>
</div>
</div>
<!-- 2022 -->

<div class="column is-one-third-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
              <img src="/assets/img/2022/pic1.jpg" alt="">
            </figure>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" routerLink="/mywork/y2022">
              2022
            </a>
        </footer>


    </div>
  </div>

  `,
  styles: [`
  .container {
    position: center
    
  }
  `]
})
export class MyworklistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
