import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent }, // About route
  { path: 'vehicles/:id', component: VehicleDetailsComponent },
];
