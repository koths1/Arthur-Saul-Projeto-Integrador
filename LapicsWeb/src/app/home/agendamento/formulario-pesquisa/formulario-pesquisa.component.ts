import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormPesquisa } from 'src/app/model/formPesquisa';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Usuario } from 'src/app/model/usuario';
import { FormularioService } from 'src/app/services/formPesquisa/formulario.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-formulario-pesquisa',
  templateUrl: './formulario-pesquisa.component.html',
  styleUrls: ['./formulario-pesquisa.component.css']
})
export class FormularioPesquisaComponent implements OnInit {

  formulario: FormPesquisa = new FormPesquisa();
  felicidade: string
  usuario: Usuario = new Usuario();
  indicacaoOutro: string

  constructor(private http: HttpClient,
    private userAuth: UserAuthService,
    private formularioService: FormularioService,
    private spinner: NgxSpinnerService,
    private route: Router) { 
    
      this.usuario = this.userAuth.usuarioAtual()

  }

  ngOnInit() {
  }

  

  enviarFormulario() {
    this.spinner.show()
    //Termos físicos
    var dorMuscular = (<HTMLInputElement>document.getElementById('dorMuscular')).checked
    var cansaco = (<HTMLInputElement>document.getElementById('cansaco')).checked
    var fadiga = (<HTMLInputElement>document.getElementById('fadiga')).checked
    var taquicardia = (<HTMLInputElement>document.getElementById('taquicardia')).checked
    var sudorese = (<HTMLInputElement>document.getElementById('sudorese')).checked
    var difRespirar = (<HTMLInputElement>document.getElementById('difRespirar')).checked
    var insonia = (<HTMLInputElement>document.getElementById('insonia')).checked
    var constipacao = (<HTMLInputElement>document.getElementById('constipacao')).checked
    var gripeFrequente = (<HTMLInputElement>document.getElementById('gripeFrequente')).checked
    //Termos emocionais
    var felicidade = (<HTMLInputElement>document.getElementById('felicidade')).checked
    var tristeza = (<HTMLInputElement>document.getElementById('tristeza')).checked
    var estresse = (<HTMLInputElement>document.getElementById('estresse')).checked
    var bemestar = (<HTMLInputElement>document.getElementById('bemestar')).checked
    var depressao = (<HTMLInputElement>document.getElementById('depressao')).checked
    var ansiedade = (<HTMLInputElement>document.getElementById('ansiedade')).checked
    var impaciencia = (<HTMLInputElement>document.getElementById('impaciencia')).checked
    //Voce já ouviu falar
    var acuputura = (<HTMLInputElement>document.getElementById('Acupuntura')).checked
    var arteterapia = (<HTMLInputElement>document.getElementById('Arteterapia')).checked
    var osteopatia = (<HTMLInputElement>document.getElementById('Osteopatia')).checked
    var apiterapia = (<HTMLInputElement>document.getElementById('Apiterapia')).checked
    var geoterapia = (<HTMLInputElement>document.getElementById('Geoterapia')).checked
    var homeopatia = (<HTMLInputElement>document.getElementById('Homeopatia')).checked
    var ayurveda = (<HTMLInputElement>document.getElementById('Ayurveda')).checked
    var quiropraxia = (<HTMLInputElement>document.getElementById('Quiropraxia')).checked
    var aromaterapia = (<HTMLInputElement>document.getElementById('Aromaterapia')).checked
    var hipnoterapia = (<HTMLInputElement>document.getElementById('Hipnoterapia')).checked
    var fitoterapia = (<HTMLInputElement>document.getElementById('Fitoterapia')).checked
    var biodanca = (<HTMLInputElement>document.getElementById('Biodanca')).checked
    var reflexoterapia = (<HTMLInputElement>document.getElementById('Reflexoterapia')).checked
    var bioenergetica = (<HTMLInputElement>document.getElementById('Bioenergetica')).checked
    var imposicao = (<HTMLInputElement>document.getElementById('Imposicao')).checked
    var antroposofia = (<HTMLInputElement>document.getElementById('Antroposofia')).checked
    var danca = (<HTMLInputElement>document.getElementById('Danca')).checked
    var reiki = (<HTMLInputElement>document.getElementById('Reiki')).checked
    var constelacao = (<HTMLInputElement>document.getElementById('Constelacao')).checked
    var ozonioterapia = (<HTMLInputElement>document.getElementById('Ozonioterapia')).checked
    var termalismo = (<HTMLInputElement>document.getElementById('Termalismo')).checked
    var meditacao = (<HTMLInputElement>document.getElementById('Meditacao')).checked
    var shantala = (<HTMLInputElement>document.getElementById('Shantala')).checked
    var cromoterapia = (<HTMLInputElement>document.getElementById('Cromoterapia')).checked
    var florais = (<HTMLInputElement>document.getElementById('Florais')).checked
    var musicoterapia = (<HTMLInputElement>document.getElementById('Musicoterapia')).checked
    var comunitaria = (<HTMLInputElement>document.getElementById('Comunitaria')).checked
    var naturopatia = (<HTMLInputElement>document.getElementById('Naturopatia')).checked
    var yoga = (<HTMLInputElement>document.getElementById('Yoga')).checked
    //Habilidades parapsiquicas
    var intuicoes = (<HTMLInputElement>document.getElementById('intuicoes')).checked
    var precognicoes = (<HTMLInputElement>document.getElementById('precognicoes')).checked
    var retrocognicoes = (<HTMLInputElement>document.getElementById('retrocognicoes')).checked
    var clarividencia = (<HTMLInputElement>document.getElementById('clarividencia')).checked
    var clariaudiencia = (<HTMLInputElement>document.getElementById('clariaudiencia')).checked
    this.formulario.pergunta7 == ""
    this.formulario.pergunta8 == ""
    this.formulario.pergunta12 == ""
    if(dorMuscular == true){
      if(this.formulario.pergunta7 == undefined){
        this.formulario.pergunta7 = "Dor muscular"
      }else{
        this.formulario.pergunta7 += ", Dor muscular"
      }
    }
    if(cansaco == true){
      if(this.formulario.pergunta7 == undefined){
        this.formulario.pergunta7 = "Cansaço"
      }else{
        this.formulario.pergunta7 += ", Cansaço"
      }
    }
    if(fadiga == true){
      if(this.formulario.pergunta7 == undefined){
        this.formulario.pergunta7 = "Fadiga"
      }else{
        this.formulario.pergunta7 += ", Fadiga"
      }
    }
    if(taquicardia == true){
      if(this.formulario.pergunta7 == undefined){
        this.formulario.pergunta7 = "Aceleração do coração"
      }else{
        this.formulario.pergunta7 += ", Aceleração do coração"
      }
    }
    if(sudorese == true){
      if(this.formulario.pergunta7 == undefined){
        this.formulario.pergunta7 = "Suor excessivo"
      }else{
        this.formulario.pergunta7 += ", Suor excessivo"
      }
    }
    if(difRespirar == true){
      if(this.formulario.pergunta7 == undefined){
        this.formulario.pergunta7 = "Dificuldade para pegar no sono"
      }else{
        this.formulario.pergunta7 += ", Dificuldade para pegar no sono"
      }
    }
    if(insonia == true){
      if(this.formulario.pergunta7 == undefined){
        this.formulario.pergunta7 = "Insônia"
      }else{
        this.formulario.pergunta7 += ", Insônia"
      }
    }
    if(constipacao == true){
      if(this.formulario.pergunta7 == undefined){
        this.formulario.pergunta7 = "Constipação"
      }else{
        this.formulario.pergunta7 += ", Constipação"
      }
    }
    if(gripeFrequente == true){
      if(this.formulario.pergunta7 == undefined){
        this.formulario.pergunta7 = "Gripe frequente"
      }else{
        this.formulario.pergunta7 += ", Gripe frequente"
      }
    }
    //2
    if(felicidade == true){
      if(this.formulario.pergunta8 == undefined){
        this.formulario.pergunta8 = "Felicidade"
      }else{
        this.formulario.pergunta8 += ", Felicidade"
      }
    }
    if(tristeza == true){
      if(this.formulario.pergunta8 == undefined){
        this.formulario.pergunta8 = "Tristeza"
      }else{
        this.formulario.pergunta8 += ", Tristeza"
      }
    }
    if(estresse == true){
      if(this.formulario.pergunta8 == undefined){
        this.formulario.pergunta8 = "Estresse"
      }else{
        this.formulario.pergunta8 += ", Estresse"
      }
    }
    if(bemestar == true){
      if(this.formulario.pergunta8 == undefined){
        this.formulario.pergunta8 = "Bem-estar"
      }else{
        this.formulario.pergunta8 += ", Bem-estar"
      }
    }
    if(depressao == true){
      if(this.formulario.pergunta8 == undefined){
        this.formulario.pergunta8 = "Depressão"
      }else{
        this.formulario.pergunta8 += ", Depressão"
      }
    }
    if(ansiedade == true){
      if(this.formulario.pergunta8 == undefined){
        this.formulario.pergunta8 = "Ansiedade"
      }else{
        this.formulario.pergunta8 += ", Ansiedade"
      }
    }
    if(impaciencia == true){
      if(this.formulario.pergunta8 == undefined){
        this.formulario.pergunta8 = "Impaciência"
      }else{
        this.formulario.pergunta8 += ", Impaciência"
      }
    }
    //3
    if(acuputura == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Acupuntura"
      }else{
        this.formulario.pergunta12 += ", Acupuntura"
      }
    }
    if(arteterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Arteterapia"
      }else{
        this.formulario.pergunta12 += ", Arteterapia"
      }
    }
    if(osteopatia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Osteopatia"
      }else{
        this.formulario.pergunta12 += ", Osteopatia"
      }
    }
    if(apiterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Apiterapia"
      }else{
        this.formulario.pergunta12 += ", Apiterapia"
      }
    }
    if(geoterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Geoterapia"
      }else{
        this.formulario.pergunta12 += ", Geoterapia"
      }
    }
    if(homeopatia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Homeopatia"
      }else{
        this.formulario.pergunta12 += ", Homeopatia"
      }
    }
    if(ayurveda == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Ayurveda"
      }else{
        this.formulario.pergunta12 += ", Ayurveda"
      }
    }
    if(quiropraxia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Quiropraxia"
      }else{
        this.formulario.pergunta12 += ", Quiropraxia"
      }
    }
    if(aromaterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Aromaterapia"
      }else{
        this.formulario.pergunta12 += ", Aromaterapia"
      }
    }
    if(hipnoterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Hipnoterapia"
      }else{
        this.formulario.pergunta12 += ", Hipnoterapia"
      }
    }
    if(fitoterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Fitoterapia"
      }else{
        this.formulario.pergunta12 += ", Fitoterapia"
      }
    }
    if(biodanca == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Biodança"
      }else{
        this.formulario.pergunta12 += ", Biodança"
      }
    }
    if(reflexoterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Reflexoterapia"
      }else{
        this.formulario.pergunta12 += ", Reflexoterapia"
      }
    }
    if(bioenergetica == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Bioenergética"
      }else{
        this.formulario.pergunta12 += ", Bioenergética"
      }
    }
    if(imposicao == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Imposição de mãos"
      }else{
        this.formulario.pergunta12 += ", Imposição de mãos"
      }
    }
    if(antroposofia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Antroposofia"
      }else{
        this.formulario.pergunta12 += ", Antroposofia"
      }
    }
    if(danca == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Dança circular"
      }else{
        this.formulario.pergunta12 += ", Dança circular"
      }
    }
    if(reiki == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Reiki"
      }else{
        this.formulario.pergunta12 += ", Reiki"
      }
    }
    if(constelacao == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Constelação familiar"
      }else{
        this.formulario.pergunta12 += ", Constelação familiar"
      }
    }
    if(ozonioterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Ozonioterapia"
      }else{
        this.formulario.pergunta12 += ", Ozonioterapia"
      }
    }
    if(termalismo == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Termalismo"
      }else{
        this.formulario.pergunta12 += ", Termalismo"
      }
    }
    if(meditacao == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Meditação"
      }else{
        this.formulario.pergunta12 += ", Meditação"
      }
    }
    if(shantala == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Shantala"
      }else{
        this.formulario.pergunta12 += ", Shantala"
      }
    }
    if(cromoterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Cromoterapia"
      }else{
        this.formulario.pergunta12 += ", Cromoterapia"
      }
    }
    if(florais == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Terapia de florais"
      }else{
        this.formulario.pergunta12 += ", Terapia de florais"
      }
    }
    if(musicoterapia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Musicoterapia"
      }else{
        this.formulario.pergunta12 += ", Musicoterapia"
      }
    }
    if(comunitaria == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Terapia comunitária integrativa"
      }else{
        this.formulario.pergunta12 += ", Terapia comunitária integrativa"
      }
    }
    if(naturopatia == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Naturopatia"
      }else{
        this.formulario.pergunta12 += ", Naturopatia"
      }
    }
    if(yoga == true){
      if(this.formulario.pergunta12 == undefined){
        this.formulario.pergunta12 = "Yoga"
      }else{
        this.formulario.pergunta12 += ", Yoga"
      }
    }
    //4
    if(intuicoes == true){
      if(this.formulario.pergunta17 == undefined){
        this.formulario.pergunta17 = "Intuições"
      }else{
        this.formulario.pergunta17 += ", Intuições"
      }
    }
    if(precognicoes == true){
      if(this.formulario.pergunta17 == undefined){
        this.formulario.pergunta17 = "Precognições"
      }else{
        this.formulario.pergunta17 += ", Precognições"
      }
    }
    if(retrocognicoes == true){
      if(this.formulario.pergunta17 == undefined){
        this.formulario.pergunta17 = "Retrocognições"
      }else{
        this.formulario.pergunta17 += ", Retrocognições"
      }
    }
    if(clarividencia == true){
      if(this.formulario.pergunta17 == undefined){
        this.formulario.pergunta17 = "Clarividência"
      }else{
        this.formulario.pergunta17 += ", Clarividência"
      }
    }
    if(clariaudiencia == true){
      if(this.formulario.pergunta17 == undefined){
        this.formulario.pergunta17 = "Clariaudiência"
      }else{
        this.formulario.pergunta17 += ", Clariaudiência"
      }
    }
    if(this.formulario.indicacao == "Outro:"){
      this.formulario.indicacao+= this.indicacaoOutro
    }
    this.formulario.nome = this.usuario.nome
    console.log(this.formulario)
    this.formularioService.createFormulario(this.formulario,this.usuario.idusuario)
    setTimeout(() => {
      this.spinner.hide()
      this.route.navigateByUrl("/agendamentos")
    }, 5000)
    
  }

}
