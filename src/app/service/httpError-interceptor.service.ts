import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AlertifyService } from "./alertify.service";

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor {
    constructor(private alertifyService: AlertifyService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Http request Started..');
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    const errorMeassage = this.setError(error)
                    console.log(error);
                    this.alertifyService.error(errorMeassage);
                    return throwError(errorMeassage);
                })
            );
    }

    setError(error: HttpErrorResponse): string {
        let errorMeassage = 'unknown error occured';
        if (error.error instanceof ErrorEvent) {
            //client-side error
            errorMeassage = error.error.message;
        }
        else {
            //server side error
            if (error.status != 0) {
                errorMeassage = error.error.errorMeassage
            }
            errorMeassage = error.error;
        }
        return errorMeassage;
    }
}