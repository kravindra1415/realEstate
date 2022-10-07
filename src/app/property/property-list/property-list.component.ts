import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty> | undefined;
  constructor(private _housingService: HousingService) {
  }

  ngOnInit(): void {
    this._housingService.getAll().subscribe({
      next: (value) => {
        this.properties = value;
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
}


