// import { TestBed } from '@angular/core/testing';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';

// import { ProductsService } from './products.service';
// import { environment } from 'src/environments/environment';

// describe('ProductsService', () => {
//   let service: ProductsService;
//   let controller: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//     });
//     service = TestBed.inject(ProductsService);
//     controller = TestBed.inject(HttpTestingController);
//   });

//   it('should get all products', () => {
//     service
//       .getAllProducts()
//       .subscribe((response) => expect(response).toEqual([]));

//     const req = controller.expectOne(environment.apiUrl + 'products');
//     req.flush([]);
//   });
// });
