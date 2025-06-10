import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UsuarioCadastro {
  nome: string;
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL = 'http://localhost:3000/api'; // ajuste conforme sua API

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: UsuarioCadastro): Observable<any> {
    return this.http.post(`${this.API_URL}/usuarios/cadastro`, usuario);
  }

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.API_URL}/usuarios/login`, { email, senha });
  }
}
