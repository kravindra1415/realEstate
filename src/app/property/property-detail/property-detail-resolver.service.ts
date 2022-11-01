import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Property } from 'src/app/models/property';
import { HousingService } from 'src/app/service/housing.service';

@Injectable({
  providedIn: 'root'
})

export class PropertyDetailResolverService implements Resolve<Property> {

  constructor(private housingService: HousingService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property | any> | Promise<Property> {
    const propId = route.params['id']
    return this.housingService.getProperty(+propId).pipe(
      catchError(err => {
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }

}
