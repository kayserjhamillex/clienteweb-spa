import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { FacebookLoginProvider, GoogleLoginProvider, AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-logintemplate',
  templateUrl: './logintemplate.component.html',
  styleUrls: ['./logintemplate.component.css']
})
export class LogintemplateComponent implements OnInit {
  usuario: SocialUser;
  loggedIn: boolean;
  editarnombre;
  parametro = {
    correo: '',
    contra: ''
  };
  cliente1: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: '',
    Google: ''
  };
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: '',
    Google: ''
  };
  tienecuenta = false;
  sinredes = false;
  redes = true;
  hombre = 'http://aplicacion.kayserjhamillex.com/assets/img/man.png';
  mujer = 'http://aplicacion.kayserjhamillex.com/assets/img/woman.png';
  mensaje;
  codigocliente;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
  ) { }
  accederConGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.toastr.success('jalando algunos datos de su gmail');
  }

  accederConFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.toastr.success('jalando algunos datos de su facebook');
  }

  signOut(): void {
    this.authService.signOut();
    this.toastr.info('cerrando cuenta');
  }

  ngOnInit() {
    this.authService.authState.subscribe(
      (user) => {
        if (user) {
          console.log(user);
          this.loggedIn = true;
          this.usuario = user;
          const filtro = this.usuario.id;
          this.clienteService.getLogin(filtro).subscribe(
            res => {
              if (res) {
                this.cliente = res;
                this.clienteService.loggin(res);
                this.router.navigate(
                  [
                    'pages',
                    'home'
                  ]
                );
              }
            }
          );
        } else {
          this.loggedIn = false;
        }
      }
    );
  }
  login() {
    const correito = this.parametro.correo.toString();
    const contrasena = this.parametro.contra.toString();
    this.clienteService.getLoginsinRedes(correito, contrasena).subscribe(
      res => {
        if (res) {
          this.cliente1 = res;
          this.clienteService.loggin(res);
          this.toastr.success('bienvenido cliente');
          this.router.navigate(
            [
              'pages',
              'home'
            ]
          );
        } else {
          this.toastr.error('correo y contra incorrecto');
        }
      }
    );
  }
}
