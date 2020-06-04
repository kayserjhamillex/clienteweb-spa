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
  serviciospares: any = [];
  serviciosimpares: any = [];
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
    this.GetServicios();
  }

}
