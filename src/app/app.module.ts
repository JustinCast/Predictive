
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatProgressBarModule
} from "@angular/material";
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routing';
import { PredictComponent } from './predict/predict.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PredictComponent,
    AboutComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
