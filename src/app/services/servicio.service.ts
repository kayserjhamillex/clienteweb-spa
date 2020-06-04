import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/servicio';
  constructor(
    private http: HttpClient
  ) { }
  getServicios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getServicio(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
