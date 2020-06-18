import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-detailservice',
  templateUrl: './detailservice.component.html',
  styleUrls: ['./detailservice.component.css']
})
export class DetailserviceComponent implements OnInit {
  servicio: Servicio = {
    id: 0,
    Name: '',
    Resumen: '',
    Descripcion: '',
    IconoServicioS: '',
    ImagenServicioS: '',
    Monto: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private servicioService: ServicioService,
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.servicioService.getServicio(params.id).subscribe(
        res => {
          if (res) {
            console.log(res);
            this.servicio = res;
            this.toastr.info('detalles del servicio');
          } else {
            this.toastr.error('servicio no encontrado');
          }
        }
      );
    }
  }

}
