import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { ServicioService } from '../services/servicio.service';
import { FacebookLoginProvider, GoogleLoginProvider, AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  client;
  usuario: SocialUser;
  haycliente = false;
  redsocial = false;
  servicios: any = [];
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private clienteService: ClienteService,
    private servicioService: ServicioService,
  ) { }
  getservicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        if (res) {
          this.servicios = res;
        } else {
          this.toastr.error('no se puede listar los servicios');
        }
      }
    );
  }
  loggout() {
    this.clienteService.loggout();
    if (this.redsocial === true) {
      this.authService.signOut();
      this.toastr.info('cerrando cuenta');
    }
  }
  ngOnInit() {
    this.getservicios();
    this.authService.authState.subscribe(
      (user) => {
        if (user) {
          this.redsocial = true;
          this.usuario = user;
        } else {
          this.redsocial = false;
        }
      }
    )
    this.clienteService.client$.subscribe(res => {
      if (res) {
        this.client = res;
        this.haycliente = true;
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
