import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import { ProductsRoutingModule } from './products-routing.module';  // Ensure routing is handled here

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,    
    ProductsRoutingModule  // Only this is needed for routing
  ]
})
export class ProductsModule { }
