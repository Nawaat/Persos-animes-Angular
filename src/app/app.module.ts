import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePersosComponent } from './liste-persos/liste-persos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListeAnimesComponent } from './liste-animes/liste-animes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MatSliderModule } from '@angular/material/slider';
import { DetailsPersoComponent } from './details-perso/details-perso.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ListePersosComponent,
    ListeAnimesComponent,
    AuthentificationComponent,
    DetailsPersoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
