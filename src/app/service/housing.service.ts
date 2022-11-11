import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Property } from '../models/property';
import { environment } from 'src/environments/environment';
import { IKeyvaluepair } from '../models/ikeyvaluepair';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  BaseApiUrl = environment.baseApiUrl;
  // baseApiUrl: "https://localhost:7038/"

  constructor(private _httpClient: HttpClient) { }

  getAllCities(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://localhost:7038/api/City');
  }

  getPropertyTypes(): Observable<IKeyvaluepair[]> {
    return this._httpClient.get<IKeyvaluepair[]>('https://localhost:7038/api/PropertyType/list');
  }

  getFurnishingTypes(): Observable<IKeyvaluepair[]> {
    return this._httpClient.get<IKeyvaluepair[]>('https://localhost:7038/api/FurnishingType/list');
  }

  getProperty(id: number) {
    return this._httpClient.get<Property>(this.BaseApiUrl + "api/Property/detail/" + id.toString());
  }

  // getProperty(id: number) {
  //   return this.getAll(1).pipe(map(propertiesArray => {
  //     //throw new Error('Some error');
  //     return propertiesArray.find(p => p.id === id);
  //   }));
  // }

  // getAll(SellRent?: number): Observable<Property[]> {
  //   return this._httpClient.
  //     get('data/properties.json').pipe(map(data => {
  //       const propertiesArray: Property[] = [];
  //       const localProperties = JSON.parse(localStorage.getItem('newProp') as string);

  //       if (localProperties) {
  //         for (var id in localProperties) {
  //           if (SellRent) {
  //             if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
  //               propertiesArray.push(localProperties[id]);
  //             }
  //           }
  //           else {
  //             propertiesArray.push(localProperties[id]);
  //           }
  //         }
  //       }

  //       for (var id in data) {
  //         if (SellRent) {
  //           if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
  //             propertiesArray.push(data[id]);
  //           }
  //         }
  //         else {
  //           propertiesArray.push(data[id]);
  //         }
  //       }
  //       return propertiesArray;
  //     })
  //     );
  // }

  getAll(SellRent?: number): Observable<Property[]> {
    return this._httpClient.get<Property[]>(this.BaseApiUrl + 'api/Property/list/' + SellRent?.toString());
  }

  // addProperty(property: Property) {
  //   let newProp = [property];

  //   //add a new property in array if newProp already exists i local storage
  //   if (localStorage.getItem('newProp')) {
  //     newProp = [property, ...JSON.parse(localStorage.getItem('newProp') as string)]
  //   }
  //   localStorage.setItem('newProp', JSON.stringify(newProp));
  // }

  addProperty(property: Property) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    }
    return this._httpClient.post(this.BaseApiUrl + 'api/Property/add', property, httpOptions);
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

  getAgeProperty(dateOfEstablishment: string): string {
    const todayDate = new Date();
    const estDate = new Date(dateOfEstablishment);
    let age = todayDate.getFullYear() - estDate.getFullYear();
    const month = todayDate.getMonth() - estDate.getMonth();

    //current month smaller than establishment month or 
    //same month but current date smaller than establishment date

    if (month < 0 || (month === 0 && todayDate.getDate() < estDate.getDate())) {
      age--;
    }

    //establishment date is future date
    if (todayDate < estDate) {
      return '0';
    }

    //age is less than year
    if (age === 0) {
      return 'less than a year';
    }

    return age.toString();
  }

}
