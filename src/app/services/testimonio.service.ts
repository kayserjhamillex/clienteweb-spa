import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonioService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/testimonio';
  constructor(
    private http: HttpClient
  ) { }
  getTestimonios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getTestimonio(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
