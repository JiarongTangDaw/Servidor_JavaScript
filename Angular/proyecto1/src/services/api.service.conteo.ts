import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceConteo {
  public apiUrl:string  = '';
  public propiedad:string = '';

  constructor(private http: HttpClient) {}

  // Función que consume la API
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  async contarElementosCampo(): Promise<any> {

    let resultado = await this.getPosts();
    let datos = await lastValueFrom(resultado);
    datos = datos[this.propiedad]

    if(Array.isArray(datos)){
      return datos.length;
    }

    return "no es un array";
  }
}
