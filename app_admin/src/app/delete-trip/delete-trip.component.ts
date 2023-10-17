import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TripDataService } from "../services/trip-data.service";

@Component({
  selector: "app-delete-trip",
  templateUrl: "./delete-trip.component.html",
  styleUrls: ["./delete-trip.component.css"],
})
export class DeleteTripComponent implements OnInit {
  constructor(private router: Router, private tripService: TripDataService) {}

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something is wrong, couldn't find the tripCode!");
      this.router.navigate([""]);
      return;
    }
  }

  deleteTrip() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something is wrong, couldn't find the tripCode!");
      this.router.navigate([""]);
      return;
    }

    this.tripService.deleteTrip(tripCode).then((data) => {
      console.log(data); // Handle the response from the deletion
      this.router.navigate(["/list-trips"]); // Redirect to the list of trips or another appropriate page
    });
  }
}
