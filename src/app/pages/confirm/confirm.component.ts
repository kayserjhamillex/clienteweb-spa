import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  persona: Persona = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenPeople: '',
    Google: '0'
  };
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: '',
    Google: '0'
  };
  cliente1: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: '',
    Google: '0'
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.clienteService.getPersona(params.id).subscribe(
        res => {
          console.log(res);
          this.persona = res;
          this.cliente.Fullname = this.persona.Fullname;
          this.cliente.Numerodocumento = this.persona.Numerodocumento;
          this.cliente.Email = this.persona.Email;
          this.cliente.Password = this.persona.Password;
          this.cliente.ImagenClienteS = this.persona.ImagenPeople;
        },
        err => console.log(err)
      );
    }
  }
  saveCliente() {
    delete this.cliente.id;
    console.log(this.cliente);
    this.clienteService.saveCliente(this.cliente).subscribe(
      res => {
        if (res) {
          this.cliente1 = res;
          this.clienteService.loggin(res);
          this.toastr.success('usted confirmo su registro satisfactoriamente');
        } else {
          this.toastr.error('no se le pudo registrar');
        }
      }
    );
  }
}
