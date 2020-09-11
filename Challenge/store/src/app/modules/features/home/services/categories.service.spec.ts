// import { TestBed } from '@angular/core/testing';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';

// import { CategoriesService } from './categories.service';
// import { environment } from 'src/environments/environment';
// import { IProduct } from './../interfaces/products.interface';

// describe('CategoriesService', () => {
//   let service: CategoriesService;
//   let controller: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//     });
//     service = TestBed.inject(CategoriesService);
//     controller = TestBed.inject(HttpTestingController);
//   });

//   it('should get all categories', () => {
//     const categories = {
//       data: [{} as IProduct],
//     };
//     service
//       .getAllCategories()
//       .subscribe((response) => expect(response).toEqual([]));

//     const req = controller.expectOne(environment.apiUrl + 'categories');
//     req.flush([]);
//   });
// });
