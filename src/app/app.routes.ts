import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import {UpdateVehicleComponent} from "./update-vehicle/update-vehicle.component";

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent }, // About route
  { path: 'vehicles/:id', component: VehicleDetailsComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'update-vehicle/:id', component: UpdateVehicleComponent },
];
