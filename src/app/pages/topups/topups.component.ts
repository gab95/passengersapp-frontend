import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { PassengerReport } from "../../model/passenger-reports";

import { PassengerService } from "../../services/passengers/passenger.service";

@Component({
  selector: "app-topups",
  templateUrl: "./topups.component.html",
  styleUrls: ["./topups.component.css"],
})
export class TopupsComponent implements OnInit {
  displayedColumns: string[] = ["date", "amount"];

  dataSource: MatTableDataSource<PassengerReport>;
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  passengerTopUps: PassengerReport[] = [];

  constructor(private _passengerService: PassengerService) {}

  ngOnInit() {
    this._passengerService.getPassengerTopUps().subscribe((resp: any) => {
      this.passengerTopUps = resp.topups;

      this.dataSource = new MatTableDataSource(this.passengerTopUps);
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
