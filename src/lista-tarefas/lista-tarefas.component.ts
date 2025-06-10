import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ListaTarefasService } from './lista-tarefas.service';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  tarefas: any[] = [];
  nomeUsuario: string = '';

  constructor(private route: Router, private tarefasService: ListaTarefasService) { }

  ngOnInit(): void {
    this.tarefasService.listarTarefas().subscribe({
      next: (tarefasApi) => {
        this.tarefas = tarefasApi;
        console.log('valor tarefa', tarefasApi)
      },
      error: (err) => {
        console.error('Erro ao carregar tarefas:', err);
      }
    });
  }

  concluirTarefa(tarefaId: number) {
    const tarefa = this.tarefas.find(t => t.id === tarefaId);
    if (tarefa) {
      tarefa.concluida = true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }
}
