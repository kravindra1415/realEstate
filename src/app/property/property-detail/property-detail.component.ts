import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/models/property';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;
  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }

  property = new Property();

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);

    this.route.params.subscribe((data) => {
      this.propertyId = Number(data['id']);
      this.housingService.getProperty(this.propertyId).subscribe(
        (data: Property | any) => {
          this.property = data;
        }
      );
    })
  }

  // onSelectNext() {
  //   this.propertyId += 1;
  //   this.router.navigate(['property-detail', this.propertyId]);
  // }
}
