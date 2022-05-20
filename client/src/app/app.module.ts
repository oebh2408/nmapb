import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsService } from './services/clients.service';
import { FormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ProductListComponent,
    ProductFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ClientsService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
