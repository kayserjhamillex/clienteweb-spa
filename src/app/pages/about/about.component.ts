import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasajistaService } from 'src/app/services/masajista.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  masajistas: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private masajistaService: MasajistaService,
  ) { }
  GetMasajistas() {
    this.masajistaService.getMasajistas().subscribe(
      res => {
        if (res) {
          this.masajistas = res;
          console.log(res);
          console.log(this.masajistas);
        } else {
          this.toastr.error('no se pudo listar a los masajistas');
        }
      }
    );
  }
  ngOnInit() {
    this.GetMasajistas();
  }

}
