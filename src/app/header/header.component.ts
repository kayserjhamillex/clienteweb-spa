import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
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
  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private authService: AuthService,
  ) { }
  loggout() {
    this.clienteService.loggout();
    if (this.redsocial === true) {
      this.authService.signOut();
      this.toastr.info('cerrando cuenta');
    }
  }
  ngOnInit() {
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
