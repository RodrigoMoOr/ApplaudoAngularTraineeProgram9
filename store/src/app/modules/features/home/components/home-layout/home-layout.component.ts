import { Component, OnInit } from '@angular/core';

import { IProduct } from 'src/app/modules/shared/common/interfaces/product-response.interface';
import { ICategory } from 'src/app/modules/shared/common/interfaces/category-response.interface';
import { CategoriesService } from 'src/app/modules/shared/common/services/categories.service';
import { ProductsService } from 'src/app/modules/shared/common/services/products.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  products: IProduct[];
  categories: ICategory[];

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getCategories(): void {
    this.categoriesService.getAll().subscribe((catResponse) => {
      this.categories = catResponse.data;
    });
  }

  getProducts(): void {
    this.productsService
      .getAllWithQueryParams('image_attachment.blob,category')
      .subscribe((prodsResponse) => {
        this.products = prodsResponse.data;
      });
  }
}
