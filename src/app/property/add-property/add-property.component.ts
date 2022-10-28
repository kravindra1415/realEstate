import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/models/IProperty';
import { IPropertyBase } from 'src/app/models/ipropertbase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm: NgForm | undefined;
  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent | undefined;
  propertyView: IPropertyBase = {
    Id: 0,
    Name: '',
    Price: 1234,
    SellRent: 1200,
    PType: "",
    FType: "",
    BHK: 0,
    BuiltArea: 0,
    City: '',
    RTM: 0
  };

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']
  entranceTypes: Array<string> = ['East', 'West', 'South', 'North']

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    //console.warn(formData);
    console.warn(this.addPropertyForm);
    console.log('SellRent=' + this.addPropertyForm?.value.BasicInfo.SellRent);

  }

  selectTab(tabId: number) {
    this.formTabs!.tabs[tabId].active = true;
  }
}
