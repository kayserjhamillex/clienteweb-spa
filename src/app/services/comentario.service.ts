import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coment } from '../models/coment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/comentario';
  constructor(
    private http: HttpClient
  ) { }
  getComentarios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getComentariosbyBlog(codigo: string) {
    return this.http.get(`${this.apiUrl}/byblog/${codigo}`);
  }

  getComentario(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteComentario(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveComentario( comentario: Coment) {
    return this.http.post(`${this.apiUrl}/create`, comentario);
  }

  updateTestimonio(id: string|number, updatedcomentario: Coment): Observable<Coment> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedcomentario);
  }



}
