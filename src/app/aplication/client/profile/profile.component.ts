import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  client;
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: '',
    Google: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.clienteService.client$.subscribe(res => {
      if (res) {
        this.client = res;
        this.cliente = res;
      } else {
        this.client = null;
        this.router.navigate(
          [
            'pages',
            'home'
          ]
          );
      }
      // console.log(res);

    });
    if (this.clienteService.isLoggedIn()) {
      const client = JSON.parse(localStorage.getItem('cliente'));
      console.log(client);
      this.clienteService.loggin(client);
      this.router.navigate(
        [
          'app',
          'client-profile'
        ]
      );
    } else {
      this.router.navigate(
        [
          'pages',
          'home'
        ]
      );
    }
  }

}
