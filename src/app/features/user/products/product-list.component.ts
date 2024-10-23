import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/product.service'; // Adjust path as necessary
import { Product } from './product.model'; // Adjust path as necessary
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // Array to hold products
  loading: boolean = true; // For loading state

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;  // Assigning fetched data to products array
    });
  }
}