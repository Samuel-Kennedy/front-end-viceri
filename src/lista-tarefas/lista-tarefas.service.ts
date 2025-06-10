import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaTarefasService {

  private readonly API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  listarTarefas(): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.API_URL}/tarefas`, { headers });
  }
}
