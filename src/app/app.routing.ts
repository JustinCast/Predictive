import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PredictComponent } from "./predict/predict.component";
import { AboutComponent } from "./about/about.component";
import { WeatherComponent } from "./weather/weather.component";

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component:  HomeComponent},
    {path: 'predict', component: PredictComponent},
    {path: 'about', component: AboutComponent},
    {path: 'weather', component: WeatherComponent}
]