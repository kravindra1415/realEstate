import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/models/property';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  public propertyId!: number;
  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }

  property = new Property();

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);
    this.route.data.subscribe((data: Property | any) => {
      this.property = data['prp'];
    })

    // this.route.params.subscribe((data) => {
    //   this.propertyId = Number(data['id']);
    //   this.housingService.getProperty(this.propertyId).subscribe(
    //     (data: Property | any) => {
    //       this.property = data;
    //     },
    //     error => this.router.navigate(['/'])
    //   );
    // })


    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'bi bi-arrow-left',
        arrowNextIcon: 'bi bi-arrow-right',
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: '../../../assets/images/int-1.jpg',
        medium: '../../../assets/images/int-1.jpg',
        big: '../../../assets/images/int-1.jpg'
      }
      ,
      {
        small: '../../../assets/images/int-2.jpg',
        medium: '../../../assets/images/int-2.jpg',
        big: '../../../assets/images/int-2.jpg'
      },
      {
        small: '../../../assets/images/int-3.jpg',
        medium: '../../../assets/images/int-3.jpg',
        big: '../../../assets/images/int-3.jpg'
      },
      {
        small: '../../../assets/images/int-4.jpg',
        medium: '../../../assets/images/int-4.jpg',
        big: '../../../assets/images/int-4.jpg'
      },
      {
        small: '../../../assets/images/int-5.jpg',
        medium: '../../../assets/images/int-5.jpg',
        big: '../../../assets/images/int-5.jpg'
      }
    ];
  }
}

  // onSelectNext() {
  //   this.propertyId += 1;
  //   this.router.navigate(['property-detail', this.propertyId]);
  // }

