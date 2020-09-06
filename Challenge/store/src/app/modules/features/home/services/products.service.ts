import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  getProductsByCategory(
    resources: string,
    categoryId: number
  ): Observable<IAPIResponse> {
    const params = new HttpParams({
      fromObject: {
        include: resources,
        'filter[category_id_eq]': categoryId.toString(),
      },
    });

    return this.http.get<IAPIResponse>(environment.apiUrl + '/products', {
      params,
    });
  }

  postLikeToProduct(productId: number, kind: string): Observable<IAPIResponse> {
    const data = new HttpParams({
      fromObject: {
        product_id: productId.toString(),
        kind,
      },
    });

    return this.http.post<IAPIResponse>(environment.apiUrl + '/likes', data);
  }
}
