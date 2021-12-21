import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartsService: CartService) {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  addToCart(row: Product): void {
    this.cartsService.addProduct(row);
    alert(`Added to cart with success!`);
  }

  removeFromCart(row: Product): void {
    this.cartsService.removeProduct(row);
  }
}
