import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component'; // Use your existing ShoppingCartComponent

const routes: Routes = [
  { path: '', component: ShoppingCartComponent } // Route for the shopping cart
];

@NgModule({
  declarations: [ShoppingCartComponent],  // Use the existing ShoppingCartComponent
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Lazy-loaded routes
  ]
})
export class CartModule { }
