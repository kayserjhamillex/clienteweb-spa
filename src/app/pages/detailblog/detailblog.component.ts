import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/models/blog';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {
  blog: Blog = {
    id: 0,
    Titulo: '',
    Subtitulo: '',
    Resumen: '',
    Descripcion: '',
    Imagendelblog: '',
    Videodelblog: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.blogService.getBlog(params.id).subscribe(
        res => {
          if (res) {
            console.log(res);
            this.blog = res;
            this.toastr.info('detalles del blog');
          } else {
            this.toastr.error('blog no encontrado');
          }
        }
      );
    }
  }
}
