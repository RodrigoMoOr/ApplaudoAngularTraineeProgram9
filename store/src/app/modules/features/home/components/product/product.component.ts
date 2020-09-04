import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from '../../../../shared/common/interfaces/product-response.interface';

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
