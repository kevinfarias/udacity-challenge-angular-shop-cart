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
}
