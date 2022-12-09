import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
  <div class="content has-text-centered">
    <p>
      Made by <a href="https://www.linkedin.com/in/patricia-r-b86937242/">Patri</a> on December 2022 as a portfolio practice!
    </p>
  </div>
</footer>
  `,
  styles: [`
  
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
