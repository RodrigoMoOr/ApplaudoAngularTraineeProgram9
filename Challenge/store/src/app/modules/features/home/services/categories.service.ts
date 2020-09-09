import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from './../../../../../environments/environment';
import { IAPIResponse } from '../interfaces/api-response.interface';
import { ICategory } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private BASE_URL = environment.apiUrl;
  private path = 'categories';

  constructor(protected http: HttpClient) {}

  getAllCategories(): Observable<ICategory[]> {
    return this.http
      .get<IAPIResponse<ICategory[]>>(this.BASE_URL + this.path)
      .pipe(
        catchError(this.handleError),
        map((response: IAPIResponse<ICategory[]>) => {
          return response.data;
        })
      );
  }

  private handleError(err: Response): Observable<never> {
    let error: Error;
    switch (err.status) {
      case 401:
        error = new Error(
          'Whoops, you are unauthorized to access this content!'
        );
        break;

      case 404:
        error = new Error(
          'Whoops, cannot find the content you are looking for!'
        );
        break;

      case 422:
        error = new Error('Whoops, could not process your request!');
        break;

      case 500:
        error = new Error(
          'Whoops, internal server error! Please try again later'
        );
        break;
    }

    return throwError(error);
  }
}
