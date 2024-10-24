import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Ensure the correct path
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HeaderComponent } from './features/user/header/header.component';
import { AppComponent } from './app.component';
import { ProductsModule } from './features/user/products/products.module';
import { HomeComponent } from "./features/user/home/home.component";  // Import ProductsModule
import { ProductModalComponent } from './features/user/products/product-modal/product-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    ProductsModule, 
    AppRoutingModule, 
    HttpClientModule, 

],
  providers: [],
 // entryComponents: [ProductModalComponent],  // Required for opening dialogs
  bootstrap: [AppComponent]  // Bootstrap with the root component
})
export class AppModule {

 }
