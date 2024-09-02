import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../vehicle.service';
import {Vehicle} from '../vehicle.model'; // Adjust the import path
import {RouterLink} from "@angular/router"; // Import your service here
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    RouterLink, CommonModule, //provideHttpClient(),
  ],
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  vehicles: Vehicle[] = []; // Specify the type here

//  constructor(private vehicleService: VehicleService) {}
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Vehicle[]>('http://localhost:8080/api/vehicle_data').subscribe((data: Vehicle[]) => {
      this.vehicles = data;
    });

    /*this.vehicleService.getVehicles().subscribe((data: Vehicle[]) => {
      this.vehicles = data;
    });*/
  }
}
