import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { IProperty } from '../models/IProperty';
import { Observable } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  constructor(private _httpClient: HttpClient) { }

  getProperty(id: number) {
    return this.getAll().pipe(map(propertiesArray => {
      //throw new Error('Some error');
      return propertiesArray.find(p => p.Id === id);
    }));
  }

  getAll(SellRent?: number): Observable<Property[]> {
    return this._httpClient.
      get('data/properties.json').pipe(map(data => {
        const propertiesArray: Property[] = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp') as string);

        if (localProperties) {
          for (var id in localProperties) {
            if (SellRent) {
              if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
                propertiesArray.push(localProperties[id]);
              }
            }
            else {
              propertiesArray.push(localProperties[id]);
            }
          }
        }

        for (var id in data) {
          if (SellRent) {
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
              propertiesArray.push(data[id]);
            }
          }
          else {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
      );
  }

  addProperty(property: Property) {
    let newProp = [property];

    //add a new property in array if newProp already exists i local storage
    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp') as string)]
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', localStorage.getItem('PID') as string + 1)
      return localStorage.getItem('PID');
    }
    else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
