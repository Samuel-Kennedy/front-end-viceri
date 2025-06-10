import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { ListaTarefasComponent } from '../lista-tarefas/lista-tarefas.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'lista-tarefas', component: ListaTarefasComponent },
];
