import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl = 'https://hp-api.onrender.com/api/characters'; // ejemplo

  constructor(private http: HttpClient) {}

  // Función que consume la API
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Ejemplo POST
  createPost(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
