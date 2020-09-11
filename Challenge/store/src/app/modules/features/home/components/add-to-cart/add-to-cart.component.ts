import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IProduct } from './../../interfaces/products.interface';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  @Input() product: IProduct;

  constructor(@Inject(MAT_DIALOG_DATA) product: IProduct) {
    this.product = product;
  }

  ngOnInit(): void {}
}
