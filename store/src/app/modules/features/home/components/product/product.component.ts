import { IProduct } from './../../common/interfaces/product-response.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  constructor() {}

  ngOnInit(): void {}
}
