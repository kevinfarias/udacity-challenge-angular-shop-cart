import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productsOnCart: Product[];
  fullname: string = '';
  address: string = '';
  cardnumber?: number = undefined;
  constructor(private cartService: CartService, private router: Router) {
    this.productsOnCart = [];
  }

  ngOnInit(): void {
    this.productsOnCart = this.cartService.getProducts();
  }

  removeFromCart(row: Product): void {
    this.cartService.removeProduct(row);
  }

  changeProduct(row: Product): void {
    this.cartService.changeProduct(row);
  }

  getTotal(): number {
    return this.productsOnCart.length
      ? this.productsOnCart
          .map((row: Product) => {
            return row.price * Number(row?.amount);
          })
          .reduce((a, b) => a + b)
      : 0;
  }

  submitForm(): void {
    this.router.navigateByUrl('/confirmation', {
      state: {
        fullname: this.fullname,
        totalAmount: this.getTotal(),
      },
    });
    this.fullname = '';
    this.address = '';
    this.cardnumber = 0;
  }
}
