import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/product.service'; // Adjust path as necessary
import { Product } from './product.model'; // Adjust path as necessary
import { ProductModalComponent } from './product-modal/product-modal.component'; // Adjust path as necessary
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../../core/cart.service'; // Create this service to manage the cart

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // Array to hold products
  loading: boolean = true; // For loading state

  constructor(
    private productService: ProductService,
    private cartService: CartService, // Inject CartService
    public dialog: MatDialog // Inject MatDialog for modal
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;  // Assigning fetched data to products array
      this.loading = false;  // Set loading to false after data is fetched

      this.products.forEach(product => product.quantity = 1); // Default quantity is 1

    });
  }
 // Method to add a product to the cart with the entered quantity
 addToCart(product: Product): void {
  const quantity = product.quantity || 1;
  if (quantity > 0) {
    this.cartService.addProductToCart(product, quantity);
    alert(`${product.title} added to cart with quantity: ${quantity}`);
  }
}
  // Method to open the modal when image is clicked
  openModal(product: Product): void {
    this.dialog.open(ProductModalComponent, {
      width: '600px', // Adjust modal width as needed
      data: product // Pass the product data to the modal
    });
  }
}