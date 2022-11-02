import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/service/housing.service';
import { IProperty } from '../../models/IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;
  Today = new Date();
  City = '';
  searchCity = '';
  SortByParam = '';
  sortDirection = 'asc';

  constructor(private _housingService: HousingService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this._housingService.getAll(this.SellRent).subscribe({
      next: (value) => {
        this.properties = value as any;
        //
        // const newProperty = JSON.parse(localStorage.getItem('newProp') as string);
        // //
        // if (newProperty.SellRent == this.SellRent) {
        //   this.properties = [newProperty, ...this.properties];
        // }
        //console.log(this.route.snapshot.url.toString());
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  onCityFilter() {
    this.searchCity = this.City;
  }

  onCityFilterClear() {
    this.searchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    }
    else {
      this.sortDirection = 'desc';
    }
  }
}