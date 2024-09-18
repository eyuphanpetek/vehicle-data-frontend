import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PanelModule],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent {
  vehicle = {
    licensePlate: '',
    organizationName: '',
    speed: null,
    passageDateTime: '',
    measurementAccuracy: null,
    radiationLevel: null,
    prePassageRadiationLevel: null,
    postPassageRadiationLevel: null
  };

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post('http://localhost:8080/api/vehicle_data', this.vehicle)
      .subscribe(response => {
        console.log('Vehicle added successfully');
        this.router.navigate(['/']);
      }, error => {
        console.error('Error adding vehicle', error);
      });
  }
}
