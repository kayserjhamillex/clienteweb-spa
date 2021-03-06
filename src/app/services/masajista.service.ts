import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasajistaService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/masajista';
  constructor(
    private http: HttpClient
  ) { }
  getMasajistas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getMasajista(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfiltermasajista(dia: string) {
    return this.http.get(`${this.apiUrl}/filter/${dia}`);
  }

}
