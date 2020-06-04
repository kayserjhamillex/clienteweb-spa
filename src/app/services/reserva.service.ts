import { Injectable } from '@angular/core';
import { Reservita } from '../models/reservita';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/reserva';
  apiUrldominio = 'https://obscure-island-00733.herokuapp.com/spa';
  apiUrlbase = 'https://obscure-island-00733.herokuapp.com';
  constructor(
    private http: HttpClient
  ) { }

  getReservas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getReserva(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getClientBooking(codigoclient: string) {
    return this.http.get(`${this.apiUrl}/search/client/${codigoclient}`);
  }

  getfiltroreservas(masajista: string) {
    return this.http.get(`${this.apiUrl}/filtro/${masajista}`);
  }

  GetReservationSend(codigo: string) {
    return this.http.get(`${this.apiUrldominio}/gmailreserva/${codigo}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveReserva( Reserva: Reservita) {
    return this.http.post(`${this.apiUrl}/create`, Reserva);
  }

  getSendconfirmation(correo: string, codigo: string, parametro: string) {
    return this.http.get(`${this.apiUrlbase}/people/gmail/confirmationapp/${correo}/${codigo}/${parametro}`);
  }

}
