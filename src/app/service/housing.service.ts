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

  getAll(SellRent: number): Observable<IProperty[]> {
    return this._httpClient.
      get('data/properties.json').pipe(map(data => {
        const propertiesArray: IProperty[] = [];
        for (var id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id])
          }
        }
        return propertiesArray;
      })
      )
  }

  addProperty(property: Property) {
    localStorage.setItem('newProp', JSON.stringify(property));
  }
}
