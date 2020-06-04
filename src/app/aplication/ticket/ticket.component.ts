import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  client;
  reserva: Reserva = {
    id: 0,
    FechaReserva: new Date(),
    Estado: '',
    AdminSId: 0,
    ClienteSId: 0,
    ServicioSId: 0,
    HorarioSId: 0,
    admin: {
      id: 0,
      Fullname: '',
      Correo: '',
    },
    cliente: {
      id: 0,
      Fullname: '',
      Numerodocumento: '',
      Email: '',
    },
    servicio: {
      id: 0,
      Name: '',
      Resumen: '',
      Monto: ''
    },
    horario: {
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
      },
    }
  };
  clientbookingdetail: any = this.reserva;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private reservaService: ReservaService
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    const codigoreserva = params.id;
    if (params.id) {
      this.reservaService.getReserva(params.id).subscribe(
        res => {
          if (res) {
            console.log(res);
            this.clientbookingdetail = res;
            this.toastr.info('detalles de su reserva');
          } else {
            this.toastr.error('reserva no existe');
          }
        }
      );
    }
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
          'ticket',
          codigoreserva
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

}
