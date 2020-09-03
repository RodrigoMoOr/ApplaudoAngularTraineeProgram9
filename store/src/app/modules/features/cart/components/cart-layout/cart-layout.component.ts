import { IProduct } from './../../../../shared/interfaces/product-response.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-layout',
  templateUrl: './cart-layout.component.html',
  styleUrls: ['./cart-layout.component.scss'],
})
export class CartLayoutComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'amount', 'total'];
  dataSource = PRODUCTS_DATA;

  constructor() {}

  ngOnInit(): void {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const PRODUCTS_DATA: IProduct[] = [
  {
    id: 1,
    slug: 'mona',
    name: 'mona',
    description: 'mona',
    likes_up_count: 1,
    likes_down_count: 1,
    published_at: 'mona',
    category: {
      id: 1,
      slug: 'mona',
      name: 'mona',
    },
    image: {
      id: 1,
      url: 'mona',
    },
    master: {
      price: '$5.09',
      promotional_price: '$4.87',
      stock: 5,
    },
  },
];
