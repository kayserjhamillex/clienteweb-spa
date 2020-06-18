import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  parametro = {
    correo: ''
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
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
  ) { }
  confirmar() {
    const correo = this.parametro.correo.toString();
    this.clienteService.getClienteCorreo(correo).subscribe(
      res => {
        if (res) {
          this.cliente = res;
          const codigo = this.cliente.id.toString();
          this.clienteService.getSendRecover(codigo, correo).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.mensaje = res;
                this.toastr.success('se le envio un correo para poder actualizar su password');
              } else {
                this.toastr.error('no se pudo enviar el correo de recuperacion');
              }
            }
          );
        } else {
          this.toastr.error('usted no es cliente de la empresa');
        }
      }
    );
  }
  ngOnInit() {
  }

}
