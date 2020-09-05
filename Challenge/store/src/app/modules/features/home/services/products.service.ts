import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from './data.service';
import { environment } from './../../../../../environments/environment';
import { IAPIResponse } from './../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends DataService {
  constructor(http: HttpClient) {
    super(environment.apiUrl, 'products', http);
  }

  // getProductsByCategory(resources: string, categoryId: number): Observable<IAPIResponse> {

  //   const params = {
  //     include: resources,
  //     filter: {
  //       category_id_eq: categoryId,
  //     }
  //   };

  //   return this.http.get<IAPIResponse>(environment.apiUrl + '/products', { params: { params } });
  // }
}
