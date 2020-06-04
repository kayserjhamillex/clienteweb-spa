import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacto: Contacto = {
    id: 0,
    Nombre: '',
    Asunto: '',
    Correo: '',
    Mensaje: ''
  };
  contacto1: Contacto = {
    id: 0,
    Nombre: '',
    Asunto: '',
    Correo: '',
    Mensaje: ''
  };
  codigocontacto;
  success: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private contactoService: ContactoService,
  ) { }

  SaveContact() {
    delete this.contacto.id;
    console.log(this.contacto);
    this.contactoService.saveContacto(this.contacto).subscribe(
      res => {
        if (res) {
          this.contacto1 = res;
          this.codigocontacto = this.contacto1.id.toString();
          this.contactoService.GetSendContact(this.codigocontacto).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.success = res;
                this.toastr.success('se le repondera lo mas antes posible');
              } else {
                this.toastr.success('no se pudo enviar el correo');
              }
            }
          );
        } else {
          this.toastr.success('no se pudo crear el contacto');
        }
      }
    );
  }

  ngOnInit() {
  }

}
