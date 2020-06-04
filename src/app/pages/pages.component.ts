import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  client;
  constructor(
    private clienteService: ClienteService,
  ) { }

  ngOnInit() {
    this.clienteService.client$.subscribe(res => {
      if (res) {
        this.client = res;
      } else {
        this.client = null;
      }
    });
    if (this.clienteService.isLoggedIn()) {
      const client = JSON.parse(localStorage.getItem('cliente'));
      console.log(client);
      this.clienteService.loggin(client);
    } else {

    }
  }
}
