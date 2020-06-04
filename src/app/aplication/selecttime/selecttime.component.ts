import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-selecttime',
  templateUrl: './selecttime.component.html',
  styleUrls: ['./selecttime.component.css']
})
export class SelecttimeComponent implements OnInit {
  client;
  codigoservicio;
  fecha;
  masajista;
  reservas: any = [];
  horario: any = [];
  filtrada: any = [];
  reservasdia: any = [];
  horariofiltrado: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private reservaService: ReservaService,
    private horarioService: HorarioService,
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: radix
    const worker = parseInt(this.activatedRoute.snapshot.paramMap.get('worker'));
    this.fecha = fecha;
    this.codigoservicio = codigo;
    this.masajista = worker;
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
    if (codigo && worker) {
      const parametro = worker.toString();
      this.reservaService.getfiltroreservas(parametro).subscribe(
        res => {
          this.reservas = res;
          const arrayreservas = this.reservas;
          const reservasfecha = [];
          for (const obj1 of arrayreservas) {
            const numfecha = new Date(obj1.FechaReserva).getTime();
            if (numfecha === fecha) {
              reservasfecha.push(obj1);
              this.reservasdia = reservasfecha;
            }
          }
          this.horarioService.getHorarioMasajistaDia(nombredia, parametro).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              this.horario = res;
              if (Object.entries(this.reservasdia).length > 0) {
                const array1 = this.reservasdia;
                const array2 = this.horario;
                const filtrado: any = [];
                for (const filtro1 of array2) {
                  const codigohorario = filtro1.id;
                  for (const filtro2 of array1) {
                    const codigofiltrar = filtro2.HorarioSId;
                    if (codigohorario === codigofiltrar) {
                      filtrado.push(filtro1);
                      this.filtrada = filtrado;
                    }
                  }
                }
                const array3 = this.filtrada;
                // pinshi filtro definitivo
                // const datos1 = [1,2,3,4,5,6,7];
                // const datos2= [3,5,7];
                // const result = datos1.filter(el => !datos2.includes(el));
                // console.log(result);
                const respuesta = array2.filter(alv => !array3.includes(alv));
                this.horariofiltrado = respuesta;
                console.log(this.horariofiltrado);
              } else if (Object.entries(this.reservasdia).length === 0) {
                this.horariofiltrado = this.horario;
                console.log(this.horariofiltrado);
              }
            },
            err => {
              console.log(err);
            }
          );
        },
        err => {
          console.log(err);
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
          'selecttime',
          codigo,
          fecha,
          worker
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
  elegir(wasa) {
    // tslint:disable-next-line: radix
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: radix
    const worker = parseInt(this.activatedRoute.snapshot.paramMap.get('worker'));
    const codigaso = wasa;
    this.router.navigate(
      [
        'app',
        'pasarela',
        codigo,
        fecha,
        worker,
        codigaso
      ]
    );
  }
}
