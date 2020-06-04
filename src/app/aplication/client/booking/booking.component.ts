import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  client;
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: '',
    Google: ''
  };
  clientbooking: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private reservaService: ReservaService
  ) { }

  ngOnInit() {
    this.clienteService.client$.subscribe(res => {
      if (res) {
        this.client = res;
        this.cliente = res;
        const codigo = this.cliente.id.toString();
        this.reservaService.getClientBooking(codigo).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            if (res) {
              this.clientbooking = res;
              this.toastr.success('sus reservas :)');
              console.log(res);
            } else {
              this.toastr.info('no tiene reservas');
            }
          }
        );
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
          'client-booking'
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

  detail(wasa) {
    console.log(wasa);
    const codigaso = wasa;
    this.router.navigate(
      [
        'app',
        'client-detailbooking',
        codigaso
      ]
    );
  }

}
