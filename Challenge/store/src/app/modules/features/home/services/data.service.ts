import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IAPIResponse } from '../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private BASE_URL: string,
    private path: string,
    private http: HttpClient
  ) {}

  getAll(): Observable<IAPIResponse> {
    return this.http
      .get<IAPIResponse>(this.BASE_URL + '/' + this.path)
      .pipe(catchError((error: Response) => this.handleError));
  }

  getAllWithQueryParams(resources: string): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(this.BASE_URL + '/' + this.path, {
      params: {
        include: resources,
      },
    });
  }

  getBySlug(slug: string, resources: string): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(this.BASE_URL + this.path + '/' + slug, {
      params: {
        include: resources,
      },
    });
  }

  private handleError(error: Response): void {
    if (error.status === 401) {
      throw new HttpErrorResponse({ error });
    }
  }
}
