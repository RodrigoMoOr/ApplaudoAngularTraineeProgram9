import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { IAPIResponse } from '../interfaces/product-response.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient, private path: string) {}

  getAll(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(this.BASE_URL + '/' + this.path);
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
}
