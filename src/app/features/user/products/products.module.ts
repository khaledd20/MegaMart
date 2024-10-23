import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import { ProductsRoutingModule } from './products-routing.module';  // Ensure routing is handled here
import { ProductModalComponent } from './product-modal/product-modal.component'; // Import the modal component
import { MatDialogModule } from '@angular/material/dialog'; // For dialog
@NgModule({
  declarations: [
    ProductListComponent,
  //  ProductModalComponent 
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,     
    ProductsRoutingModule  // Only this is needed for routing
  ]
})
export class ProductsModule { }
