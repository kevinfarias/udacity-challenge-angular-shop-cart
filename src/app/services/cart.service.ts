import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[];
  constructor() {
    this.products = [];
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(row: Product): Product[] {
    /* remove first, this way never will be duplicated */
    this.removeProduct(row);
    if (!row.amount || Number(row.amount) === 0) {
      throw new Error('You must pass a valid amount!');
    }
    this.products.push(row);

    return this.products;
  }

  removeProduct(row: Product): Product[] {
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      if (row.id === product.id) {
        this.products.splice(i, 1);
      }
    }

    return this.products;
  }

  changeProduct(row: Product): Product[] {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === row.id) {
        this.products[i] = row;
      }
    }
    return this.products;
  }

  clean(): Product[] {
    this.products.splice(0, this.products.length);
    return this.products;
  }
}
