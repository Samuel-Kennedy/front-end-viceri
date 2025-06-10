import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.formLogin.invalid) return;

    const { email, senha } = this.formLogin.value;

    this.authService.login(email, senha).subscribe({
      next: (res) => {
        console.log('Login bem-sucedido:', res);
        localStorage.setItem('token', res.token); // opcional, se tiver token
        this.route.navigate(['/lista-tarefas']);
      },
      error: (err) => {
        console.error('Erro no login:', err);
        alert('E-mail ou senha inválidos');
      }
    });
  }

  enviaCadastro() {
    this.route.navigate(['/cadastro']);
  }
}
