import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle.model'; // Adjust the import path

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    private apiUrl = 'http://localhost:8080/api/vehicles'; // Replace with your actual API endpoint

    constructor(private http: HttpClient) {}

    getVehicles(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
