import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from "../services/trip-data.service";

@Component({
  selector: "app-edit-trip",
  templateUrl: "./edit-trip.component.html",
  styleUrls: ["./edit-trip.component.css"],
})
export class EditTripComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) {}
  ngOnInit() {
    // retrieve stashed tripId
    let tripCode = localStorage.getItem("tripCode");

    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate([""]);
      return;
    }
    console.log("EditTripComponent#onInit found tripCode " + tripCode);
    // initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ["", Validators.required],
      length: ["", Validators.required],
      start: ["", Validators.required],
      resort: ["", Validators.required],
      perPerson: ["", Validators.required],
      image: ["", Validators.required],
      description: ["", Validators.required],
    });
    console.log(
      "EditTripComponent#onInit calling TripDataService#getTrip('" +
        tripCode +
        "')"
    );
    this.tripService.getTrip(tripCode).then((data) => {
      
      // Convert data to an array
      const tripArray = Array.isArray(data) ? data : [data];
      
      // variable to store trip to be edited
      let tripData;

      // loop through tripArray to find match
      for (const trip of tripArray) {
        if (trip.code === tripCode) {
          tripData = trip;
          break; // break loop once trip is found
        }
      }

      console.log(data);
      console.log(tripCode);
      // Don't use editForm.setValue() as it will throw console error
      this.editForm.patchValue(tripData);
      console.log(tripData);
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value).then((data) => {
        console.log(data);
        this.router.navigate([""]);
      });
    }
  }
}
