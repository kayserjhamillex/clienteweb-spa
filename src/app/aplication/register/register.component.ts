import { ToastrService } from 'ngx-toastr';
// import { Persona } from 'src/app/models/persona';
// import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { ClienteService } from 'src/app/services/cliente.service';
// import { FacebookLoginProvider, GoogleLoginProvider, AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // usuario: SocialUser;
  // loggedIn: boolean;
  // editarnombre;
  // cliente1: Cliente = {
  //   id: 0,
  //   Fullname: '',
  //   Numerodocumento: '',
  //   Email: '',
  //   Password: '',
  //   ImagenClienteS: '',
  //   Google: ''
  // };
  // persona: Persona = {
  //   id: 0,
  //   Fullname: '',
  //   Numerodocumento: '',
  //   Email: '',
  //   Password: '',
  //   ImagenPeople: 'http://aplicacion.kayserjhamillex.com/assets/img/man.png',
  //   Google: '0'
  // };
  // persona1: Persona = {
  //   id: 0,
  //   Fullname: '',
  //   Numerodocumento: '',
  //   Email: '',
  //   Password: '',
  //   ImagenPeople: 'http://aplicacion.kayserjhamillex.com/assets/img/man.png',
  //   Google: '0'
  // };
  // cliente: Cliente = {
  //   id: 0,
  //   Fullname: '',
  //   Numerodocumento: '',
  //   Email: '',
  //   Password: '',
  //   ImagenClienteS: '',
  //   Google: ''
  // };
  // tienecuenta = false;
  // sinredes = false;
  // redes = true;
  // mensaje;
  // codigocliente;
  constructor(
    // private router: Router,
    // private toastr: ToastrService,
    // private authService: AuthService,
    // private clienteService: ClienteService,
    // private activatedRoute: ActivatedRoute,
  ) { }
  // accederConGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   this.toastr.success('jalando algunos datos de su gmail');
  // }

  // accederConFacebook(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  //   this.toastr.success('jalando algunos datos de su facebook');
  // }

  // signOut(): void {
  //   this.authService.signOut();
  //   this.toastr.info('cerrando cuenta');
  // }
  // accedersinRedes() {
  //   this.sinredes = true;
  //   this.redes = false;
  // }
  ngOnInit() {
    // this.authService.authState.subscribe(
    //   (user) => {
    //     if (user) {
    //       console.log(user);
    //       this.loggedIn = true;
    //       this.usuario = user;
    //       this.editarnombre = this.usuario.name;
    //     } else {
    //       this.loggedIn = false;
    //     }
    //   }
    // );
  }
  // validar() {
  //   delete this.persona.id;
  //   const correo = this.persona.Email;
  //   const numero = this.persona.Numerodocumento;
  //   this.clienteService.getClienteCorreo(correo).subscribe(
  //     res => {
  //       this.cliente1 = res;
  //       const wasaa = this.cliente1.Email;
  //       this.toastr.info(`usted ya tiene registrado el correo ${wasaa}`);
  //       this.tienecuenta = true;
  //     },
  //     err => {
  //       console.error(err);
  //       this.toastr.success('correo valido');
  //     }
  //   );
  //   this.clienteService.getClienteDocumento(numero).subscribe(
  //     res => {
  //       this.cliente1 = res;
  //       const wasaa = this.cliente1.Numerodocumento;
  //       this.toastr.info(`usted ya tiene registrado el numero de documento ${wasaa}`);
  //       this.tienecuenta = true;
  //     },
  //     err => {
  //       console.error(err);
  //       this.toastr.success('numero de documento valido');
  //     }
  //   );
  //   if (this.tienecuenta === false) {
  //     console.log(this.persona);
  //     this.clienteService.savePersona(this.persona).subscribe(
  //       res => {
  //         console.log(res);
  //         this.persona1 = res;
  //         this.codigocliente = this.persona1.id;
  //         const codigo = this.codigocliente;
  //         const mail = this.persona1.Email;
  //         this.toastr.success('ese le envio un correo para confirmar su registro');
  //         this.clienteService.getSendconfirmation(mail, codigo).subscribe(
  //           // tslint:disable-next-line: no-shadowed-variable
  //           res => {
  //             console.log(res);
  //             this.mensaje = res;
  //             this.toastr.info('se envio el correo');
  //           },
  //           err => {
  //             console.error(err),
  //             this.toastr.error('no se envio el correo');
  //           }
  //         );
  //         this.router.navigate(
  //           [
  //             'pages',
  //             'home'
  //           ]);
  //       },
  //       err => {
  //         console.error(err);
  //         this.toastr.error('el correo o numero de documento ya fue registrado');
  //       }
  //     );
  //   }
  // }
  // savePaciente() {
  //   delete this.cliente.id;
  //   this.cliente.ImagenClienteS = this.usuario.photoUrl;
  //   this.cliente.Email = this.usuario.email;
  //   this.cliente.Google = this.usuario.id;
  //   const correo = this.cliente.Email;
  //   const numero = this.cliente.Numerodocumento;
  //   this.cliente.Password = numero;
  //   this.clienteService.getClienteCorreo(correo).subscribe(
  //     res => {
  //       // console.log(res);
  //       this.cliente1 = res;
  //       const wasaa = this.cliente1.Email;
  //       this.toastr.info(`usted ya tiene registrado el correo ${wasaa}`);
  //       this.tienecuenta = true;
  //     },
  //   );
  //   this.clienteService.getClienteDocumento(numero).subscribe(
  //     res => {
  //       this.cliente1 = res;
  //       const wasaa = this.cliente1.Numerodocumento;
  //       this.toastr.info(`usted ya tiene registrado el numero de documento ${wasaa}`);
  //       this.tienecuenta = true;
  //     },
  //   );
  //   if (this.tienecuenta === false) {
  //     console.log(this.cliente);
  //     if (this.cliente.Fullname === '') {
  //       this.cliente.Fullname = this.usuario.name;
  //       console.log(this.cliente);
  //       console.log('no se introdujo nombre');
  //       this.clienteService.saveCliente(this.cliente).subscribe(
  //         res => {
  //           console.log(res);
  //           this.cliente = res;
  //           this.codigocliente = this.cliente.id;
  //           this.toastr.success('usted a sido registrado');
  //           this.clienteService.loggin(res);
  //           this.router.navigate(
  //             [
  //               'pages',
  //               'home'
  //             ]
  //           );
  //         },
  //         err => {
  //           console.error(err);
  //           this.toastr.error('el correo o numero de documento ya fue registrado');
  //         }
  //       );
  //     } else {
  //       console.log(this.cliente);
  //       console.log('se introdujo nombre');
  //       this.clienteService.saveCliente(this.cliente).subscribe(
  //         res => {
  //           console.log(res);
  //           this.cliente = res;
  //           this.codigocliente = this.cliente.id;
  //           this.clienteService.loggin(res);
  //           this.toastr.success('usted a sido registrado');
  //           this.router.navigate(
  //             [
  //               'pages',
  //               'home'
  //             ]
  //           );
  //         },
  //         err => {
  //           console.error(err);
  //           this.toastr.error('el correo o numero de documento ya fue registrado');
  //         }
  //       );
  //     }
  //   }
  // }
}
