import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from './data.service';
import { environment } from './../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends DataService {
  constructor(http: HttpClient) {
    super(environment.apiUrl, 'products', http);
  }
}
