import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';

import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  clients: any = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clientsService.getClient().subscribe(
      res => {
        this.clients = res;
      },
      err => console.error(err)
    );
  }

}
