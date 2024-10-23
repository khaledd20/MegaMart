import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Ensure the correct path
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsModule } from './features/user/products/products.module';  // Import ProductsModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,  // Include your feature module
    AppRoutingModule // Add this line
    
  ],
  providers: [],

  bootstrap: [AppComponent]  // Bootstrap with the root component
})
export class AppModule {

 }
