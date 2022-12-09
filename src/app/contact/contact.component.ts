import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-warning">
  <div class="hero-body">
    <p class="title">
      Contact me!
    </p>
    <p class="subtitle">
      If you like my work or have any questions for me don't hesitate to reach out!
    </p>
  </div>
</section>
<form (ngSubmit)="submitForm()" #contactForm="ngForm">
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" name="name" type="text" placeholder="e.g Alex Smith" [(ngModel)]="name" #nameInput="ngModel" required>
    <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">Name required</div>
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left">
    <input class="input" name="email" type="email" placeholder="e.g. alexsmith@gmail.com" [(ngModel)]="email" #emailInput="ngModel" required>
    <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">Mail required</div>
    <span class="icon is-small is-left">
      <i class="fa fa-envelope fa-xs"></i>
    </span>

  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" name="message" placeholder="Your message..."[(ngModel)]="message" #messageInput="ngModel" required></textarea>
    <div class="help is-error" *ngIf="messageInput.invalid && messageInput.touched">Please write your message</div>
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button class="button is-link is-warning" [disabled]="contactForm.invalid">Submit</button>
  </div>
</div>
  `,
  styles: [`
    .field {
      margin: 20px;
    }
  `]
})
export class ContactComponent implements OnInit {

  name!: string;
  email!: string;
  message!: string;

  constructor () { }



  ngOnInit(): void {
  }
submitForm() {
  alert("Submitted!");
}

}
