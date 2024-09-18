import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle.model'; // Adjust the import path

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    private apiUrl = 'http://localhost:8080/api/vehicle_data'; // Replace with your actual API endpoint

    constructor(private http: HttpClient) {}

    getVehicle(id:string): Observable<Vehicle> {
        return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
    }

  updateVehicle(vehicle: Vehicle): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${vehicle.licensePlate}`, vehicle);
  }
}
