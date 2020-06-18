import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/models/blog';
import { Coment } from 'src/app/models/coment';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ComentarioService } from 'src/app/services/comentario.service';

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
    ImagendelBlogS: '',
    VideodelBlogS: ''
  };
  comentario: Coment = {
    id: 0,
    Comentario: '',
    BlogSId: 0,
    ClienteSId: 0
  };
  comentario1: Coment = {
    id: 0,
    Comentario: '',
    BlogSId: 0,
    ClienteSId: 0
  };
  cliente: Cliente = {
    id: 0,
    Fullname: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    ImagenClienteS: '',
    Google: ''
  };
  comentarios: any = [];
  datacoments: any = [];
  coments;
  comentar = false;
  botoncomentar = true;
  codigocliente;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private comentarioService: ComentarioService,
  ) { }
  hacercoment() {
    // tslint:disable-next-line: radix
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.comentario.BlogSId = codigo;
    this.clienteService.client$.subscribe(
      res => {
        if (res) {
          this.cliente = res;
          this.botoncomentar = false;
          this.comentar = true;
          this.codigocliente = this.cliente.id;
          this.comentario.ClienteSId = this.codigocliente;
        } else {
          this.botoncomentar = true;
          this.comentar = false;
          this.toastr.info('por favor inicie sesion');
        }
      }
    );
  }
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.blogService.getBlog(params.id).subscribe(
        res => {
          if (res) {
            this.blog = res;
            const codigo = params.id;
            console.log(codigo);
            this.toastr.info('detalles del blog');
            this.comentarioService.getComentariosbyBlog(codigo.toString()).subscribe(
              // tslint:disable-next-line: no-shadowed-variable
              res => {
                if (res) {
                  this.comentarios = res;
                  this.datacoments = res;
                  console.log(this.datacoments);
                  const datos = this.comentarios;
                  const numero = datos.length;
                  this.coments = numero;
                } else {
                  this.toastr.info('no hay comentarios');
                  const numero = 0;
                  this.coments = numero;
                }
              }
            );
          } else {
            this.toastr.error('blog no encontrado');
          }
        }
      );
    }
  }
  savecoments() {
    console.log(this.comentario);
    delete this.comentario.id;
    this.comentarioService.saveComentario(this.comentario).subscribe(
      res => {
        if (res) {
          this.comentario1 = res;
          this.toastr.success('comentario realizado');
        } else {
          this.toastr.error('no se pudo realizar el comentario');
        }
      }
    );
  }
}
