import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError} from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private productUrl = 'https://mocki.io/v1/ca859e9e-08e7-4d7b-a873-01844a5b33aa'; // Dummy ur to get the data//'api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('JSON Data: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    ///// NEVER: An Observable that emits no items to the Observer and never completes.
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: ${error.error.message)';
      }
      else {
        errorMessage = 'Server returned error code: ${error.status}, error message ${error.message)';
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    } 
}