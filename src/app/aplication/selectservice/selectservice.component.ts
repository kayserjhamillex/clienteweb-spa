import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-selectservice',
  templateUrl: './selectservice.component.html',
  styleUrls: ['./selectservice.component.css']
})
export class SelectserviceComponent implements OnInit {
  client;
  fechaActual: any;
  estalogueado = false;
  noestalogeado = true;
  bandera = true;
  registrarse = false;
  loguearse = false;
  parametro = {
    data: new Date()
  };
  dato = {
    valor: 0
  };
  servicio: Servicio = {
    id: 0,
    Name: '',
    Resumen: '',
    Descripcion: '',
    IconoServicioS: '',
    ImagenServicioS: '',
    Monto: ''
  };
  nombreservicio;
  codigodelservicio;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private servicioService: ServicioService,
  ) { }
  registrar() {
    this.registrarse = true;
    this.loguearse = false;
    this.bandera = false;
  }
  login() {
    this.loguearse = true;
    this.registrarse = false;
    this.bandera = false;
  }
  ngOnInit() {
    this.fechaActual = this.getNowDate();
    const params = this.activatedRoute.snapshot.params;
    const codigoservicio = params.id;
    this.codigodelservicio = codigoservicio;
    if (params.id) {
      this.servicioService.getServicio(params.id).subscribe(
        res => {
          if (res) {
            console.log(res);
            this.servicio = res;
            this.toastr.info('detalles de su servicio');
            this.nombreservicio = this.servicio.Name;
          } else {
            this.toastr.error('servicio no existe');
            this.router.navigate(
              [
                'pages',
                'services'
              ]
            );
          }
        }
      );
    }
    this.clienteService.client$.subscribe(res => {
      if (res) {
        this.client = res;
        this.noestalogeado = false;
        this.estalogueado = true;
      } else {
        this.client = null;
        this.noestalogeado = true;
        this.estalogueado = false;
      }
    });
  }
  selectdate(fecha) {
    // por mientras
    const codigo = 1;
    // remplazar a esto
    // const codigo = this.codigodelservicio;
    // console.log(codigo, fecha);
    const numerofecha = new Date(fecha).getTime();
    this.router.navigate(
      [
        'app',
        'selectworker',
        codigo,
        numerofecha
      ]
    );
  }

  sumarDias(fecha, dia) {
    fecha.setDate(fecha.getDate() + dia);
    const dd = fecha.getDate();
    const mm = fecha.getMonth() + 1; // As January is 0.
    const yyyy = fecha.getFullYear();
    let returnDate = '';
    returnDate += yyyy;
    if (mm < 10) {
      returnDate += `-0${mm}`;
      } else {
      returnDate += `-${mm}`;
      }

    if (dd < 10) {
    returnDate += `-0${dd}`;
    } else {
    returnDate += `-${dd}`;
    }
    return returnDate;
  }
  getNowDate() {
    const fecha = new Date();
    const today = new Date();
    // return returnDate;
    const d = new Date(today);
    // this.sumarDias(returnDate)
    return this.sumarDias(d, 1);
  }
}
