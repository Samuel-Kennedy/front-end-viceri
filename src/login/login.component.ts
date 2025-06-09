import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.formLogin.valid) {
      const { email, senha } = this.formLogin.value;
      console.log('Login com:', email, senha);
      // Aqui vai sua lógica de login com API
    }
  }
}
