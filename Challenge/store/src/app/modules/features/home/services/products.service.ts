import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IAPIResponse } from './../interfaces/api-response.interface';
import { IProduct } from '../interfaces/products.interface';
import { ILike } from './../interfaces/likes-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private BASE_URL = environment.apiUrl;
  private path = 'products';
  private resources = 'image_attachment.blob,category,master';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http
      .get<IAPIResponse<IProduct[]>>(this.BASE_URL + this.path, {
        params: { include: this.resources },
      })
      .pipe(
        catchError(this.handleError),
        map((response: IAPIResponse<IProduct[]>) => {
          return response.data;
        })
      );
  }

  getProductsByCategory(categoryId: number): Observable<IProduct[]> {
    const params = new HttpParams({
      fromObject: {
        include: this.resources,
        'filter[category_id_eq]': categoryId.toString(),
      },
    });

    return this.http
      .get<IAPIResponse<IProduct[]>>(this.BASE_URL + this.path, { params })
      .pipe(
        catchError(this.handleError),
        map((response: IAPIResponse<IProduct[]>) => {
          return response.data;
        })
      );
  }

  getProductBySlug(slug: string): Observable<IProduct> {
    return this.http
      .get<IAPIResponse<IProduct>>(this.BASE_URL + this.path + '/' + slug, {
        params: { include: this.resources },
      })
      .pipe(
        map((response: IAPIResponse<IProduct>) => {
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  postLikeToProduct(productId: number, kind: string): Observable<ILike> {
    const data = {
      product_id: productId.toString(),
      kind,
    };

    return this.http
      .post<IAPIResponse<ILike>>(environment.apiUrl + 'likes', {
        data,
      })
      .pipe(
        map((response: IAPIResponse<ILike>) => {
          return response.data;
        }),
        catchError(this.handleError)
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
