import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  servicios: any = [];
  constructor(
    private toastr: ToastrService,
    private servicioService: ServicioService,
  ) { }
  getservicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        if (res) {
          this.servicios = res;
        } else {
          this.toastr.error('no se puede listar los servicios');
        }
      }
    );
  }
  ngOnInit() {
    this.getservicios();
  }

}
