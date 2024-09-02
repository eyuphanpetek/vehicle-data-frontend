import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../vehicle.model'; // Adjust the import path
import { HttpClient } from '@angular/common/http';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: Vehicle | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const vehicleId = this.route.snapshot.paramMap.get('id');
    if (vehicleId) {
      this.http.get<Vehicle>(`http://localhost:8080/api/vehicle_data/${vehicleId}`).subscribe((data: Vehicle) => {
        this.vehicle = data;
      });
    }
  }
}
