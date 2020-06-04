import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/horario';
  constructor(
    private http: HttpClient
  ) { }
  // getHorarios() {
  //   return this.http.get(`${this.apiUrl}`);
  // }

  getHorario(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getHorarioMasajistaDia(dia: string, codigo: string) {
    return this.http.get(`${this.apiUrl}/disponibilidad/${dia}/${codigo}`);
  }

}
