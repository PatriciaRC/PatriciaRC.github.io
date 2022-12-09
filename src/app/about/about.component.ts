import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div id="aboutmegeneral">
  <!-- MESSAGE -->
    <article class="message is-warning">
  <div class="message-header">
    <p>Notice</p>
  </div>
  <div class="message-body">
   I'm on hiatus right now! Please contact me on January 15th onward.
  </div>
</article>

<!-- ABOUT ME -->

<section class="section is-medium is-dark" id="aboutme">
  <h1 class="title">About Me💝</h1><br>
  <h2 class="subtitle">
    My name is Serena and I'm a Photographer from California. I was a Christmas child in a faraway island with nowhere to go and nowhere to stay lucky. My confidence in my long wavy hair didn't waver thought. Soon I was the best mermaid in all the country and I don't regret anything about my shameless demeanor. 
  </h2>
  <figure>
    <img src="/assets/img/aboutme.jpg" width="200" height="120" alt="wallpaper de Patri">
</figure>

</section>
<!-- PICTURE -->

</div>

  `,
  styles: [`
  #aboutmegeneral {
    background-color: #474747;
    
  };

  #aboutme {
    padding-right: 200px;
    padding-left: 200px;
    padding-top: 2px;
    padding-bottom: 15px;
  }

  .title {
    color: #FFFFFF
  };
  .subtitle {
    color: #FFFFFF
  };

  

  figure {
    text-align: center;
  }

  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
