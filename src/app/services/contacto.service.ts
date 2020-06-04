import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/contacto';
  constructor(
    private http: HttpClient
  ) { }
  getContactos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getContacto(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveContacto(Contacto: Contacto) {
    return this.http.post(`${this.apiUrl}/create`, Contacto);
  }

  GetSendContact(id: string) {
    return this.http.get(`${this.apiUrl}/contacto/${id}`);
  }

}
