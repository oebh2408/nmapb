import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts(num_id: number) {
    return this.http.get(`${this.API_URL}/products/${num_id}`);
  }

  getProduct(id_cuenta: number) {
    return this.http.get(`${this.API_URL}/products/esp/${id_cuenta}`)
  }

  saveProduct(product: Product) {
    return this.http.post(`${this.API_URL}/products/`, product);
  }

  updateProduct(id_cuenta: number, updatedProduct: Product): Observable<Product> {
    return this.http.put(`${this.API_URL}/products/${id_cuenta}`, updatedProduct);
  }

  deleteProduct(id_cuenta: number) {
    return this.http.delete(`${this.API_URL}/products/${id_cuenta}`);
  }

}
