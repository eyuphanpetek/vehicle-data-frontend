import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../vehicle.service';
import {Vehicle} from '../vehicle.model'; // Adjust the import path
import {RouterLink} from "@angular/router"; // Import your service here
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    MultiSelectModule, FormsModule, RouterLink, CommonModule, TableModule, ButtonModule, DialogModule, InputTextModule, CardModule, //provideHttpClient(),
  ],
  styleUrls: ['./home.component.css'],
  providers: [DialogService]
})
export class HomeComponent implements OnInit {
  vehicles: Vehicle[] = []; // Specify the type here
  filteredVehicles: Vehicle[] = [];
  filterOptions: any[] = [];
  selectedFilters: any[] = [];
  sortField: string | null = null; // Track the sort field
  sortOrder: number | null = null; // Track the sort order (1 for ascending, -1 for descending)

//  constructor(private vehicleService: VehicleService) {}
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Vehicle[]>('http://localhost:8080/api/vehicle_data').subscribe((data: Vehicle[]) => {
      this.vehicles = data;
      this.filteredVehicles = data;

      this.filterOptions = [
        { label: 'Organization Name: fsg Inc co.', value: 'organizationName:fsg Inc co.' },
        { label: 'Speed > 100 km/h', value: 'speed100' },
        { label: 'High Radiation (> 1.0 μSv)', value: 'radiationHigh' }
      ];

      this.filterVehicles(); // Initial filter to set the default view
    });
  }
  filterVehicles(): void {
    this.filteredVehicles = this.vehicles.filter(vehicle => {
      let matches = true;
      for (const filter of this.selectedFilters) {
        if (typeof filter === 'string' && filter.startsWith('organizationName:')) {
          matches = matches && vehicle.organizationName === filter.split(':')[1];
        } else if (filter === 'speed100') {
          matches = matches && vehicle.speed > 100;
        } else if (filter === 'radiationHigh') {
          matches = matches && vehicle.radiationLevel > 1.0;
        }
      }
      return matches;
    });
  }

}
