import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';

import { IProduct } from '../../interfaces/products.interface';
import { ICategory } from './../../interfaces/categories.interface';
import { NavbarService } from './../../../../core/services/navbar.service';
import { AppState } from 'src/app/store/states/app.states';
import { getAllCategories } from 'src/app/store/actions/category.actions';
import { getAllProducts } from 'src/app/store/actions/product.actions';
import { allCategories } from 'src/app/store/selectors/category.selectors';
import { allProducts } from 'src/app/store/selectors/product.selectors';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {
  products: Observable<IProduct[]> = this.store.select(allProducts);
  categories: Observable<ICategory[]> = this.store.select(allCategories);
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private store: Store<AppState>,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  ngAfterViewInit(): void {
    this.navbarService.setSidenav(this.sidenav);
  }

  getCategories(): void {
    this.store.dispatch(getAllCategories());
  }

  getProducts(): void {
    this.store.dispatch(getAllProducts());
  }

  // getProductsByCategory(category: ICategory): void {
  //   this.productsService
  //     .getProductsByCategory(
  //       'image_attachment.blob,category,master',
  //       category.id
  //     )
  //     .subscribe((prodsResponse) => {
  //       this.products = prodsResponse.data;
  //     });
  // }
}
