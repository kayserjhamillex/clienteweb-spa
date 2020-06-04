import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-selectworker',
  templateUrl: './selectworker.component.html',
  styleUrls: ['./selectworker.component.css']
})
export class SelectworkerComponent implements OnInit {
  client;
  codigoservicio;
  masajistas;
  fecha;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private masajistaService: MasajistaService,
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    this.fecha = fecha;
    this.codigoservicio = codigo;
    const lafecha = new Date(fecha);
    const array =
          [
            'domingo',
            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes'
          ];
    const fechasa = lafecha.setDate(lafecha.getDate() + 1);
    const fechaselect = new Date(fechasa);
    const numerodia = fechaselect.getUTCDay() - 1;
    let nombredia = array[numerodia];
    if (numerodia === -1) {
      nombredia = 'sabado';
    }
    console.log(numerodia);
    console.log(nombredia);
    this.masajistaService.getfiltermasajista(nombredia).subscribe(
      res => {
        if (res) {
          this.masajistas = res;
          this.toastr.info('masajistas disponibles');
          console.log(this.masajistas);
        } else {
          this.toastr.error('no hay masajista para el dia seleccionado');
        }
      }
    );
    this.clienteService.client$.subscribe(res => {
      if (res) {
        this.client = res;
      } else {
        this.client = null;
        this.router.navigate(
          [
            'pages',
            'home'
          ]
          );
      }
    });
    if (this.clienteService.isLoggedIn()) {
      const client = JSON.parse(localStorage.getItem('cliente'));
      console.log(client);
      this.clienteService.loggin(client);
      this.router.navigate(
        [
          'app',
          'selectworker',
          codigo,
          fecha
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
  selectworker(codigowork) {
    const parametro1 = this.codigoservicio;
    const parametro2 = this.fecha;
    const parametro3 = codigowork;
    this.router.navigate(
      [
        'app',
        'selecttime',
        parametro1,
        parametro2,
        parametro3
      ]
    );
  }
}
