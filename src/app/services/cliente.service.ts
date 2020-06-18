import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  client = new BehaviorSubject<any>(null);
  client$ = this.client.asObservable();
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/cliente';
  apiUrlPersona = 'https://obscure-island-00733.herokuapp.com/persona';
  apiUrlbase = 'https://obscure-island-00733.herokuapp.com';
  constructor(
    private http: HttpClient
  ) { }

  loggin(client) {
    const cli = JSON.stringify(client);
    this.client.next(client);
    localStorage.setItem('cliente', cli);
  }
  loggout() {
    this.client.next(null);
    localStorage.removeItem('cliente');
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('cliente')) {
      console.log('hay cliente');
      return true;
    } else {
      console.log('¿no hay cliente');
      return false;
    }
  }
  getCliente(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getClienteCorreo(correo: string) {
    return this.http.get(`${this.apiUrl}/searchcorreo/${correo}`);
  }

  getClienteDocumento(numerodoc: string) {
    return this.http.get(`${this.apiUrl}/searchdoc/${numerodoc}`);
  }

  getSendconfirmation(correo: string, codigo: string) {
    return this.http.get(`${this.apiUrlbase}/people/gmail/confirmation/${codigo}/${correo}`);
  }

  getSendRecover(codigo: string, correo: string) {
    return this.http.get(`${this.apiUrlbase}/cliente/gmail/recover/${codigo}/${correo}`);
  }

  getLogin(google: string) {
    return this.http.get(`${this.apiUrl}/login/${google}`);
  }

  getLoginsinRedes(correo: string, pass: string) {
    return this.http.get(`${this.apiUrl}/loginsinredes/${correo}/${pass}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  savePersona(persona: Persona) {
    return this.http.post(`${this.apiUrlPersona}/create`, persona);
  }

  getPersona(id: string) {
    return this.http.get(`${this.apiUrlPersona}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveCliente(cliente: Cliente) {
    return this.http.post(`${this.apiUrl}/create`, cliente);
  }

  updateCliente(id: string|number, updatedCliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedCliente);
  }
}
