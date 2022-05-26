import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSedes() {
    return this.http.get(`${this.API_URL}/sedes`);
  }
}
