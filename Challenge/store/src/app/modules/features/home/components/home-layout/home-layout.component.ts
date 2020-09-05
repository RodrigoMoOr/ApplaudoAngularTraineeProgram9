import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';

import { IProduct } from '../../interfaces/products.interface';
import { ICategory } from './../../interfaces/categories.interface';
import { ProductsService } from './../../services/products.service';
import { CategoriesService } from './../../services/categories.service';
import { NavbarService } from './../../../../core/services/navbar.service';
import { CategoryState } from 'src/app/store/states/category.states';
import { addCategories } from './../../../../../store/actions/category.actions';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {
  products: IProduct[];
  categories: ICategory[];
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private store: Store<CategoryState>,
    private navbarService: NavbarService
  ) {}
  ngAfterViewInit(): void {
    this.navbarService.setSidenav(this.sidenav);
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getCategories(): void {
    this.categoriesService.getAll().subscribe((catResponse) => {
      this.categories = catResponse.data;
      this.store.dispatch(addCategories({ categories: this.categories }));
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
