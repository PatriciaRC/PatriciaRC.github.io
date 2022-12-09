import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app-routing.module';
import { AppComponent } from 'app.component';
import { HeaderComponent } from 'header/header.component';
import { FooterComponent } from 'footer/footer.component';
import { HomeComponent } from 'home/home.component';
import { ContactComponent } from 'contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from 'contact.service';
import { AboutComponent } from 'about/about.component';
import { MyworklistComponent } from 'myworklist/myworklist.component';
import { initializeApp } from "firebase/app";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MyworklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { };

const firebaseConfig = {
  apiKey: "AIzaSyD7xA7RX3JtyBiYK7FnOy9js5I1CgocKkg",
  authDomain: "portfolio1-88d7f.firebaseapp.com",
  projectId: "portfolio1-88d7f",
  storageBucket: "portfolio1-88d7f.appspot.com",
  messagingSenderId: "871520514615",
  appId: "1:871520514615:web:1169962bb9b6417d4505b2"
};

const app = initializeApp(firebaseConfig);
