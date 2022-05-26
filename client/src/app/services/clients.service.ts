import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from '../models/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClient(num_id: number) {
    return this.http.get(`${this.API_URL}/clients/${num_id}`);
  }
  
  getSedes() {
    return this.http.get(`${this.API_URL}/sedes`);
  }

  saveClient(client: Client) {
    return this.http.post(`${this.API_URL}/clients`, client);
  }

  updateClient(num_id: string, updatedClient: Client): Observable<Client> {
    return this.http.put(`${this.API_URL}/clients/${num_id}`, updatedClient);
  }

  deleteClient(num_id: string) {
    return this.http.delete(`${this.API_URL}/clients/${num_id}`);
  }

}
