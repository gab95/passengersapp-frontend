import { Component, OnInit } from "@angular/core";
import { PassengerService } from "../../services/passengers/passenger.service";
import { Passenger } from "../../model/passenger.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  passenger: Passenger;

  loading: boolean = false;

  constructor(private _passengerService: PassengerService) {}

  ngOnInit() {
    this.loading = true;
    this._passengerService.getPassengerInfo().subscribe((resp: any) => {
      console.log(resp);
      this.passenger = resp.passengerData;
      this.loading = false;
    });
  }
}
