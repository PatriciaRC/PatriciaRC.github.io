import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-y2022',
  template: `
   <div class="container">
<div class="columns is-multiline">

<!-- PIC1 -->

  <div class="column is-one-quarter-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
              <img src="/assets/img/2022/pic1.jpg" alt="">
            </figure>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" href="/assets/img/2022/pic1.jpg">
              15th March
            </a>
        </footer>
    </div>
  </div>

  <!--PIC2 -->

  <div class="column is-one-quarter-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
              <img src="/assets/img/2022/pic2.jpg" alt="">
            </figure>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" href="/assets/img/2022/pic2.jpg">
              25th April
            </a>
        </footer>
    </div>
  </div>
  
  <!-- PIC3 -->

  <div class="column is-one-quarter-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
              <img src="/assets/img/2022/pic3.jpg" alt="">
            </figure>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" href="/assets/img/2022/pic3.jpg">
              12th May
            </a>
        </footer>
    </div>
  </div>

<!-- PIC4 -->

  <div class="column is-one-quarter-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
              <img src="/assets/img/2022/pic4.jpg" alt="">
            </figure>
            
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" href="/assets/img/2022/pic4.jpg">
              2nd Sept
            </a>
        </footer>
    </div>
  </div>

<!-- PIC5 -->

  <div class="column is-one-quarter-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
              <img src="/assets/img/2022/pic5.jpg" alt="">
            </figure>
            
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" href="/assets/img/2022/pic5.jpg">
              12 Nov
            </a>
        </footer>
    </div>
  </div>

<!-- PIC6 -->

  <div class="column is-one-quarter-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
              <img src="/assets/img/2022/pic6.jpg" alt="">
            </figure>
            
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" href="/assets/img/2022/pic6.jpg">
              3rd Dec
            </a>
        </footer>
    </div>
  </div>

  <!-- PIC6 -->

  <div class="column is-one-quarter-desktop is-half-tablet">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
              <img src="/assets/img/2022/pic7.jpg" alt="">
            </figure>
            
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" href="/assets/img/2022/pic7.jpg">
              3rd Dec
            </a>
        </footer>
    </div>
  </div>


</div>
</div>
  `,
  styles: [`
  .container {
    margin-top: 20px;
  }
  
    `]
})
export class Y2022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
