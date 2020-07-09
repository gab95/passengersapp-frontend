import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { PassengerReport } from "../../model/passenger-reports";

import { PassengerService } from "../../services/passengers/passenger.service";

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ["date", "amount", "reader"];
  dataSource: MatTableDataSource<PassengerReport>;

  passengerPayments: PassengerReport[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _passengerService: PassengerService) {}

  ngOnInit() {
    this._passengerService.getPassengerPayments().subscribe((resp: any) => {
      this.passengerPayments = resp.payments;

      this.dataSource = new MatTableDataSource(this.passengerPayments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
