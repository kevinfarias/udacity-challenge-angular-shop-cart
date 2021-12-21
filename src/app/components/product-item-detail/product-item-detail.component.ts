import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

const emptyProduct = {
  id: 0,
  name: '',
  description: '',
  url: '',
  price: 0,
};

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss'],
})
export class ProductItemDetailComponent implements OnInit {
  id: number = 0;
  product: Product;
  products: Product[] = [];
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartsService: CartService
  ) {
    this.product = emptyProduct;
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: any) => {
      this.id = Number(params['id']);
    });
    this.productsService.getProducts().subscribe((res) => {
      this.products = res;
      this.product = emptyProduct;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === this.id) {
          this.product = this.products[i];
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addToCart(row: Product): void {
    this.cartsService.addProduct(row);
    alert(`Added to cart with success!`);
  }
}
