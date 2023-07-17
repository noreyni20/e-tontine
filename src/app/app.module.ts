import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TontineComponent } from './tontine/tontine.component';
import {  HttpClientModule } from '@angular/common/http';
import { MembreComponent } from './membre/membre.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    HomeComponent,
    InscriptionComponent,
    TontineComponent,
    MembreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
