import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Horario } from 'src/app/models/horario';
import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { Reservita } from 'src/app/models/reservita';
import { Router, ActivatedRoute } from '@angular/router';
import { CulqiService } from 'src/app/services/culqi.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { HorarioService } from 'src/app/services/horario.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.component.html',
  styleUrls: ['./pasarela.component.css']
})
export class PasarelaComponent implements OnInit {
  client;
  servicio: Servicio = {
    id: 0,
    Name: '',
    Resumen: '',
    Descripcion: '',
    IconoServicioS: '',
    ImagenServicioS: '',
    Monto: ''
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
  codigocliente;
  reserva: Reservita = {
    id: 0,
    FechaReserva: new Date(),
    Estado: 'reservado',
    AdminSId: 2,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0
  };
  reserva1: Reservita = {
    id: 0,
    FechaReserva: new Date(),
    Estado: 'reservado',
    AdminSId: 2,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0
  };
  horario: Horario = {
    id: 0,
    Dia: '',
    MasajistaId: 0,
    HoraId: 0,
    hora: {
      id: 0,
      Horainicio: '',
      Horafin: '',
    },
    masajista: {
      id: 0,
      Fullname: '',
      Genero: '',
      Celular: '',
      Email: '',
      ImagenMasajista: '',
    }
  };
  horarioseleccionado: any = this.horario;
  reservascliente: any = [];
  reservasclientefilter: any = [];
  paga = false;
  confusion = false;
  respuesta: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private culqiService: CulqiService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private reservaService: ReservaService,
    private horarioService: HorarioService,
    private servicioService: ServicioService,
  ) { }
  ngOnInit() {
    this.culqiService.initCulqi();
    // tslint:disable-next-line: radix
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: radix
    const worker = parseInt(this.activatedRoute.snapshot.paramMap.get('worker'));
    // tslint:disable-next-line: radix
    const horario = parseInt(this.activatedRoute.snapshot.paramMap.get('hora'));
    this.servicioService.getServicio(codigo.toString()).subscribe(
      res => {
        if (res) {
          this.servicio = res;
        }
      }
    );
    this.horarioService.getHorario(horario.toString()).subscribe(
      res => {
        if (res) {
          this.horarioseleccionado = res;
        }
      }
    );
    this.clienteService.client$.subscribe(res => {
      if (res) {
        this.client = res;
        this.cliente = res;
        this.codigocliente = this.cliente.id;
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
          'pasarela',
          codigo,
          fecha,
          worker,
          horario
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
    const codigaso = this.codigocliente;
    this.reservaService.getClientBooking(codigaso).subscribe(
      res => {
        if (res) {
          this.reservascliente = res;
          const array1 = this.reservascliente;
          const parametro = fecha;
          const filtro1: any = [];
          for (const obj of array1) {
            const fechasreservas = obj.FechaReserva;
            const numerofechas = new Date(fechasreservas).getTime();
            if (parametro === numerofechas) {
              filtro1.push(obj);
              this.reservasclientefilter = filtro1;
            }
          }
        }
        console.log(this.reservasclientefilter);
        const filtracion = this.reservasclientefilter;
        // cambiar el parametro al codigo de la hora
        const parametro1 = this.horarioseleccionado.HoraId;
        if (Object.entries(filtracion).length > 0) {
          this.toastr.info('hay reservas hoy');
          for (const obj1 of filtracion) {
            const parametro2 = obj1.horario.HoraId;
            if (parametro1 === parametro2) {
              this.confusion = true;
              this.paga = false;
            }
          }
        } else if (Object.entries(filtracion).length === 0) {
          this.toastr.info('no hay reservas');
          this.paga = true;
        }
      }
    );
    this.reserva.ServicioSId = codigo;
    this.reserva.HorarioSId = horario;
    this.reserva.ClienteSId = codigaso;

  }
  purchase(descripcion, precio) {
    // this.culqiService.payorder(descripcion, precio);
    if (this.confusion === true) {
      this.toastr.error('por favor elija otra hora');
    } else {
      this.culqiService.payorder(descripcion, precio);
    }
  }
  atras() {
    // tslint:disable-next-line: radix
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: radix
    const worker = parseInt(this.activatedRoute.snapshot.paramMap.get('worker'));
    this.router.navigate(
      [
        'app',
        'selecttime',
        codigo,
        fecha,
        worker
      ]
    );
  }

  Boleta() {
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    const fechita = new Date(fecha);
    this.reserva.FechaReserva = fechita;
    delete this.reserva.id;
    console.log(this.reserva);
    this.reservaService.saveReserva(this.reserva).subscribe(
      res => {
        if (res) {
          this.reserva1 = res;
          const codigo = this.reserva1.id.toString();
          this.reservaService.GetReservationSend(codigo).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.respuesta = res;
                this.toastr.success('se creo la reserva');
                this.toastr.info('se envio a su correo');
                this.router.navigate(
                  [
                    'app',
                    'ticket',
                    codigo
                  ]
                );
              } else {
                this.toastr.error('no se pudo enviar el correo');
              }
            }
          );
        } else {
          this.toastr.error('no se pudo crear la reserva');
        }
      }
    );
  }
}
