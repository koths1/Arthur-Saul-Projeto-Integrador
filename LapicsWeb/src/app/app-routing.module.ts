import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendamentoComponent } from './home/agendamento/agendamento.component';
import { TerapiasComponent } from './home/terapias/terapias.component';
import { TerapiaSelecionadaComponent } from './home/terapias/terapia-selecionada/terapia-selecionada.component';
import { LoginComponent } from './home/login/login.component';
import { GerenciarFuncionariosComponent } from './administrador/gerenciar-funcionarios/gerenciar-funcionarios.component';
import { RecomendarTerapiaComponent } from './home/recomendar-terapia/recomendar-terapia.component';
import { CadastroComponent } from './home/login/cadastro/cadastro.component';
import { FormularioPesquisaComponent } from './home/agendamento/formulario-pesquisa/formulario-pesquisa.component';
import { MeusHorariosComponent } from './participante/meus-horarios/meus-horarios.component';
import { TerapeutasComponent } from './funcionario/terapeutas/terapeutas.component';
import { AjustarCalendarioComponent } from './funcionario/ajustar-calendario/ajustar-calendario.component';
import { MeusAgendamentosComponent } from './terapeuta/meus-agendamentos/meus-agendamentos.component';
import { PerfilComponent } from './home/perfil/perfil.component';


//Path é uma string que combina com a URL do browser.
//Component é o component que o router deve criar quando navegar para essa route.
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'agendamentos', component: AgendamentoComponent },
  { path: 'terapias', component: TerapiasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gerenciar-funcionarios', component: GerenciarFuncionariosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'recomendar-terapia', component: RecomendarTerapiaComponent },
  { path: 'terapia-selecionada/:terapia', component: TerapiaSelecionadaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'meus-horarios', component: MeusHorariosComponent },
  { path: 'meus-agendamentos', component: MeusAgendamentosComponent },
  { path: 'terapeutas', component: TerapeutasComponent },
  { path: 'funcionarios', component: GerenciarFuncionariosComponent },
  { path: 'ajustar-calendario', component: AjustarCalendarioComponent },
  { path: 'formulario-pesquisa', component: FormularioPesquisaComponent }
  //{ path: '', component: },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
