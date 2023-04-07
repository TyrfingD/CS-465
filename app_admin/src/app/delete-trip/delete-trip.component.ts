import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripsService } from '../services/trips.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent {

  deleteForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripsService: TripsService
  ) {
    this.deleteForm = this.formBuilder.group({

    });
  }

  deleteTrip() {
    /*this.tripsService.deleteTrip(this.deleteForm.remove)
    .subscribe({
      next: () => this.router.navigate(['/'])
    });*/
  }

  get f() { return this.deleteForm.controls; }
  
}
