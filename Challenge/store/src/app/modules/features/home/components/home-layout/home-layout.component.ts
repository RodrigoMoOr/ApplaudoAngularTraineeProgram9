import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';

import { NavbarService } from './../../../../core/services/navbar.service';
import { IProduct } from '../../interfaces/products.interface';
import { ICategory } from './../../interfaces/categories.interface';
import { AppState } from 'src/app/store/states/app.states';
import { getAllCategories } from 'src/app/store/actions/category.actions';
import {
  getAllProducts,
  getProductsByCategory,
} from 'src/app/store/actions/product.actions';
import { allCategories } from 'src/app/store/selectors/category.selectors';
import {
  allProducts,
  productsByCategory,
} from 'src/app/store/selectors/product.selectors';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0, width: 0 }), animate(1000)]),
    ]),
  ],
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {
  products: Observable<IProduct[]>;
  categories: Observable<ICategory[]>;
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
    this.categories = this.store.select(allCategories);
  }

  getProducts(): void {
    this.store.dispatch(getAllProducts());
    this.products = this.store.select(allProducts);
  }

  getProductsByCategory(category: ICategory): void {
    this.store.dispatch(getProductsByCategory({ categoryId: category.id }));
    this.products = this.store.select(productsByCategory, category.id);
  }
}
