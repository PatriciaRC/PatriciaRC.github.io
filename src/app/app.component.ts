import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<!-- HEADER -->
   <app-header></app-header>
   
<!-- ROUTES -->
   <router-outlet></router-outlet>

<!-- FOOTER -->
   <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'proyecto-portfolio1';
}
