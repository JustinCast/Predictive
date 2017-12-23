import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PredictComponent } from "./predict/predict.component";

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component:  HomeComponent},
    {path: 'predict', component: PredictComponent}
]