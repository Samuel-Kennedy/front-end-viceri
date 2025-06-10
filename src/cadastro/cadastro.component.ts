import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class CadastroComponent implements OnInit {
  formCadastro!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.formCadastro.valid) {
      const { nome, email, senha } = this.formCadastro.value;

      this.authService.cadastrarUsuario({ nome, email, senha }).subscribe({
        next: (res) => {
          console.log('Cadastro realizado com sucesso:', res);
          alert("Cadastrado com sucesso!");
          this.router.navigate(['/login']); // redireciona após cadastro
        },
        error: (err) => {
          console.error('Erro ao cadastrar:', err);

          if (err.status === 400) {  // Exemplo: conflito por email já existente
            alert("Este email já está cadastrado. Por favor, use outro email.");
          } else {
            alert("Erro ao cadastrar. Tente novamente mais tarde.");
          }
        }
      });
    }
  }


  voltarLogin() {
    this.router.navigate(['/login']);
  }
}
