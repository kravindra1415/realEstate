import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<IProperty[]> {
    return this._httpClient.
      get('data/properties.json').pipe(map(data => {
        const propertiesArray: IProperty[] = [];
        for (var id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id])
          }
        }
        return propertiesArray;
      })
      )
  }

}
