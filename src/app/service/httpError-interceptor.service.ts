import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, concatMap, Observable, of, retry, retryWhen, throwError } from "rxjs";
import { ErrorCode } from "../enums/enum";
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
                // retry(10), => it try to login 10 times the api/method in case of wrong attempts. 
                retryWhen(error => this.retryRequest(error, 10)),
                catchError((error: HttpErrorResponse) => {
                    const errorMeassage = this.setError(error)
                    console.log(error);
                    this.alertifyService.error(errorMeassage);
                    return throwError(errorMeassage);
                })
            );
    }

    //retry the request in case of error
    retryRequest(error: Observable<any>, retryCount: number): Observable<unknown> {
        return error.pipe(
            concatMap((checkErr: HttpErrorResponse, count: number) => {
                //  retry in case WEB API is down
                // if (checkErr.status === ErrorCode.serverDown && count <= retryCount) {
                //     return of(checkErr);
                // }

                // //retry in case unauthorized error
                // if (checkErr.status === ErrorCode.unauthorized && count <= retryCount) {
                //     return of(checkErr);
                // }

                if (count <= retryCount) {
                    switch (checkErr.status) {
                        case ErrorCode.serverDown:
                            return of(checkErr);

                        case ErrorCode.unauthorized:
                            return of(checkErr);

                    }
                }

                return throwError(checkErr);
            })
        )
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