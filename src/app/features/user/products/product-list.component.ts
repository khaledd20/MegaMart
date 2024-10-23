import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  
  products = [
    { id: 1, name: 'Product 1', price: 50, imageUrl: 'assets/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, imageUrl: 'assets/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 80, imageUrl: 'assets/images/product3.jpg' }
  ];

}
