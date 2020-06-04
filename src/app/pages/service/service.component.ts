import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  servicios: any = [];
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
