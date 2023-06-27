import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { ServicesComponent } from './services/services.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { AboutComponent } from './about/about.component';
import { CarriersComponent } from './carriers/carriers.component';
import { ContactComponent } from './contact/contact.component';
import { PersonaltrainingComponent } from './personaltraining/personaltraining.component';
import { TrnsfermationComponent } from './trnsfermation/trnsfermation.component';
import { GrouptrainingComponent } from './grouptraining/grouptraining.component';
import { FooterComponent } from './footer/footer.component';
// import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    ProgrammesComponent,
    AboutComponent,
    CarriersComponent,
    ContactComponent,
    PersonaltrainingComponent,
    TrnsfermationComponent,
    GrouptrainingComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatIconModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
