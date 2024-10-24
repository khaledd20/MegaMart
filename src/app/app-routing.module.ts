import { NgModule } from '@angular/core';
import { HomeComponent } from './features/user/home/home.component';  // Ensure the correct path
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './features/user/shopping-cart/shopping-cart.component';

const routes: Routes = [
  // Home route - default route
  { path: '', component: HomeComponent },

  // Lazy loading for products module
  { 
    path: 'products', 
    loadChildren: () => import('./features/user/products/products.module').then(m => m.ProductsModule) 
  },
  
  {
    path: 'shopping-cart',
    loadChildren: () => import('./features/user/shopping-cart/shopping-cart.component').then(m => m.ShoppingCartComponent)
  },
  { 
    path: 'cart', 
    loadChildren: () => import('./features/user/shopping-cart/cart.module').then(m => m.CartModule) 
  },
  // Fallback route in case of unknown paths
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRoutingModule {}
