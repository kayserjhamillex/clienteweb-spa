import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl = 'https://obscure-island-00733.herokuapp.com/spa/blog';
  constructor(
    private http: HttpClient
  ) { }
  getBlogs() {
    return this.http.get(`${this.apiUrl}`);
  }

  getBlog(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
