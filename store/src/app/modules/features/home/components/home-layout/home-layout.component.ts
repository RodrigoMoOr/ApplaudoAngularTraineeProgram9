import { ICategory } from './../../common/interfaces/category-response.interface';
import { IProduct } from './../../common/interfaces/product-response.interface';
import { CategoriesService } from './../../services/categories.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

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
    this.productsService.getAll().subscribe((prodsResponse) => {
      this.products = prodsResponse.data;
    });
  }
}
