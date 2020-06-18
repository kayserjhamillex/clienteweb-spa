import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicios: any = [];
  testimonios: any = [];
  happycustomers = 0;
  yearsexperence = 0;
  satisfaccion;
  fundacion = 2014;
  actual = new Date().getFullYear();
  celular;
  correo;
  horario;
  direccion;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private servicioService: ServicioService,
  ) { }
  GetServicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        if (res) {
          this.servicios = res;
        } else {
          this.toastr.error('no se pueden listar los servicios');
        }
      }
    );
  }
  ngOnInit() {
    this.yearsexperence = this.actual - this.fundacion;
    // tenemos que conseguiar acceder al spam al data-number
    // <span class="block-counter-1-number" data-number="7">0</span>
    console.log(this.yearsexperence);
    this.GetServicios();
  }

}
