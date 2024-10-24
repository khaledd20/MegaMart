import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/cart.service'; 
import { Product } from '../../../features/user/products/product.model'; // Adjust path as necessary

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: { product: Product, quantity: number }[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalAmount();

  }
  calculateTotalAmount() {
    this.totalAmount = this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }
  
  onCheckout() {
    // Logic for completing the purchase process
    alert('Purchase completed successfully!');
    this.cartService.clearCart(); // Clear the cart after checkout
  }
  clearCart() {
    this.cartService.clearCart();
    this.cartItems = []; // Clear the local cart items display
  }
}
