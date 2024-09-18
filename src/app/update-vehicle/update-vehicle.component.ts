import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle.model';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, CardModule],
})
export class UpdateVehicleComponent implements OnInit {
  vehicle = {
    licensePlate: '',
    organizationName: '',
    speed: 0,
    passageDateTime: '',
    measurementAccuracy: 0,
    radiationLevel: 0,
    prePassageRadiationLevel: 0,
    postPassageRadiationLevel: 0
  };

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehicleService.getVehicle(id).subscribe(vehicle => {
        this.vehicle = vehicle;
      });
    }
  }

  onSubmit(): void {
    this.vehicleService.updateVehicle(this.vehicle).subscribe(() => {
      this.router.navigate(['/home']); // Redirect to home or another page
    });
  }
}
