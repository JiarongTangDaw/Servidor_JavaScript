import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Apiservicemejor {

   public apiUrl: string ='';
   public propiedad: string ='';

  constructor(private http: HttpClient) {}

  // Función que consume la API
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Ejemplo POST
  createPost(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  async cargaDatosPropiedad() {
    let salida: any;
    let resultado = this.getPosts();
    let dato = await lastValueFrom(resultado);
    salida = dato[this.propiedad];
    return salida;
  }
}
