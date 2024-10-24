import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import { ProductsRoutingModule } from './products-routing.module';  // Ensure routing is handled here
import { ProductModalComponent } from './product-modal/product-modal.component'; // Import the modal component
import { MatDialogModule } from '@angular/material/dialog'; // For dialog
import { FormsModule } from '@angular/forms'; // For ngModel
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    CommonModule,
    MatCardModule,
    MatDialogModule,     
    ProductsRoutingModule  // Only this is needed for routing
  ]
})
export class ProductsModule { }
