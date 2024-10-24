import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../features/user/products/product.model'; // Adjust path as necessary

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Product, quantity: number }[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);  // Observable to track cart item count

  // Method to add product to cart
  addProductToCart(product: Product, quantity: number): void {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    
    if (cartItem) {
      // If the product is already in the cart, increase its quantity
      cartItem.quantity += quantity;
    } else {
      // Otherwise, add it to the cart
      this.cart.push({ product, quantity });
    }

    // Update cart item count
    this.updateCartItemCount();
  }

  // Method to get all items in the cart
  getCartItems() {
    return this.cart;
  }

  // Method to clear the cart
  clearCart() {
    this.cart = [];
    this.updateCartItemCount();
  }

  // Method to get the cart item count as an observable
  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  // Private method to update the cart item count
  private updateCartItemCount() {
    const totalItems = this.cart.reduce((acc, item) => acc + item.quantity, 0);
    this.cartItemCount.next(totalItems);  // Emit the new cart item count
  }
}
