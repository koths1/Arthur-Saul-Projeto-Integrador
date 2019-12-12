import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//Minhas importações
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NgbdCarouselBasic } from './carousel-basic/carousel-basic.component';
import { RecomendarTerapiaComponent } from './home/recomendar-terapia/recomendar-terapia.component';
import { TerapiasComponent } from './home/terapias/terapias.component';
import { LoginComponent } from './home/login/login.component';
import { TerapiaSelecionadaComponent } from './home/terapias/terapia-selecionada/terapia-selecionada.component';
import { AgendamentoComponent } from './home/agendamento/agendamento.component';
import { FooterComponent } from './home/footer/footer.component';
import { FormularioPesquisaComponent } from './home/agendamento/formulario-pesquisa/formulario-pesquisa.component';
import { GerenciarFuncionariosComponent } from './administrador/gerenciar-funcionarios/gerenciar-funcionarios.component';
import { HeaderComponent } from './home/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './home/login/cadastro/cadastro.component';
import { PerfilComponent } from './home/perfil/perfil.component';
import { MeusHorariosComponent } from './participante/meus-horarios/meus-horarios.component';
import { FormsModule } from '@angular/forms';
import { MeusAgendamentosComponent } from './terapeuta/meus-agendamentos/meus-agendamentos.component';
import { TerapeutasComponent } from './funcionario/terapeutas/terapeutas.component';
import { AjustarCalendarioComponent } from './funcionario/ajustar-calendario/ajustar-calendario.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbdModalMessage } from './modal/modal-message/modal-message';
import { NgbdModalMessageModule } from './modal/modal-message/modal-message.module';
import { NgbdModalAgendamento } from './modal/modal-agendamento/modal-agendamento';
import { NgbdModalAgendar } from './modal/modal-agendar/modal-agendar';
import { NgbdModalAjustar } from './modal/modal-ajustar/modal-ajustar';
import { NgbdModalCadastrar } from './modal/modal-cadastrar/modal-cadastrar';
import { NgbdModalAgendamentoModule } from './modal/modal-agendamento/modal-agendamento.module';
import { NgbdModalAgendarModule } from './modal/modal-agendar/modal-agendar.module';
import { NgbdModalAjustarModule } from './modal/modal-ajustar/modal-ajustar.module';
import { NgbdModalCadastrarModule } from './modal/modal-cadastrar/modal-cadastrar.module';
import { NgbdDropdownTerapeutaModule } from './dropdown-terapeutas/dropdown-terapeuta.module';
import { NgbdDropdownUsuarioModule } from './dropdown-usuario/dropdown-usuario.module';
import { NgbdTimepickerBasicModule } from './timepicker-basic/timepicker-basic.module';
import { NgbdDatepickerPopupModule } from './datepicker-popup/datepicker-popup.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbdModalAtaModule } from './modal/modal-ata/modal-ata.module';
import { NgbdModalAta } from './modal/modal-ata/modal-ata';
import { NgbdModalFeedbackModule } from './modal/modal-feedback/modal-feedback.module';
import { NgbdModalFeedback } from './modal/modal-feedback/modal-feedback';
import { NgbdModalEditar } from './modal/modal-editar/modal-editar';
import { NgbdModalEditarModule } from './modal/modal-editar/modal-editar.module';
import { NgbdModalConfirmar } from './modal/modal-confirmar/modal-confirmar';
import { NgbdModalConfirmarModule } from './modal/modal-confirmar/modal-confirmar.module';
import { NgbdModalEditarAgendamentoModule } from './modal/modal-editar-agendamento/modal-editar-agendamento.module';
import { NgbdModalEditarAgendamento } from './modal/modal-editar-agendamento/modal-editar-agendamento';
import { NgbdModalEditarAta } from './modal/modal-editar-ata/modal-editar-ata';
import { NgbdModalEditarFeedback } from './modal/modal-editar-feedback/modal-editar-feedback';
import { NgbdModalEditarAtaModule } from './modal/modal-editar-ata/modal-editar-ata.module';
import { NgbdModalEditarFeedbackModule } from './modal/modal-editar-feedback/modal-editar-feedback.module';
//import { EventEmitterService } from './services/event/event-emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgbdCarouselBasic,
    RecomendarTerapiaComponent,
    TerapiasComponent,
    LoginComponent,
    TerapiaSelecionadaComponent,
    AgendamentoComponent,
    FooterComponent,
    FormularioPesquisaComponent,
    GerenciarFuncionariosComponent,
    HeaderComponent,
    CadastroComponent,
    PerfilComponent,
    MeusHorariosComponent,
    MeusAgendamentosComponent,
    TerapeutasComponent,
    AjustarCalendarioComponent //Aqui temos cada componente do nosso app importado
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),  //Para os modals
    NgbModule,    //NgbModule é o module do ng bootstrap
    NgbdModalMessageModule,
    NgbdModalAgendamentoModule,
    NgbdModalAgendarModule,
    NgbdModalAjustarModule,
    NgbdModalCadastrarModule,
    NgbdModalAtaModule,
    NgbdModalFeedbackModule,
    NgbdModalEditarModule,
    NgbdModalConfirmarModule,
    NgbdModalEditarAgendamentoModule,
    NgbdModalEditarAtaModule,
    NgbdModalEditarFeedbackModule,
    NgbdDropdownTerapeutaModule,
    NgbdDropdownUsuarioModule,
    NgbdDatepickerPopupModule,
    NgbdTimepickerBasicModule,
    NgxSpinnerModule,
    FormsModule,  //Importamos forms module para usar o two way data binding [(ngModel)]="" no HTML
    HttpClientModule, //importamos HttpClient para usar http
    //EventEmitterService,  //importamos eventEmitter para chamar funções de outros componentes ex: comp2 chama função do comp1
    AppRoutingModule  //Para as rotas
  ],
  providers: [],
  entryComponents: [ NgbdModalMessage, NgbdModalAgendamento, 
    NgbdModalAgendar, NgbdModalAjustar, NgbdModalCadastrar, NgbdModalAta, NgbdModalFeedback, 
    NgbdModalEditar, NgbdModalConfirmar, NgbdModalEditarAgendamento, NgbdModalEditarAta, 
    NgbdModalEditarFeedback],
  bootstrap: [AppComponent]
})
export class AppModule { }
