import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: '',
    Google: '0'
  };
  respuesta;
  parametro = {
    contra1: '',
    contra2: ''
  };
  codigocliente;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.clienteService.getCliente(params.id).subscribe(
        res => {
          console.log(res);
          this.cliente = res;
          this.codigocliente = this.cliente.id;
        },
        err => console.log(err)
      );
    }
  }

  updatePassword() {
    if (this.parametro.contra1 === this.parametro.contra2) {
      this.cliente.Password = this.parametro.contra1;
      console.log(this.cliente);
      const codigo = this.codigocliente;
      this.clienteService.updateCliente(codigo, this.cliente).subscribe(
        res => {
          if (res) {
            this.respuesta = res;
            this.toastr.success('contra actualizada');
            this.router.navigate(
              [
                'app',
                'login'
              ]
            );
          } else {
            this.toastr.error('no se pudo actualizar');
          }
        }
      );
    } else {
      this.toastr.error('las contras son diferentes');
    }
  }
}
