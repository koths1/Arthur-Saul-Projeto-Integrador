import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormPesquisa } from 'src/app/model/formPesquisa';

@Component({
  selector: 'app-formulario-pesquisa',
  templateUrl: './formulario-pesquisa.component.html',
  styleUrls: ['./formulario-pesquisa.component.css']
})
export class FormularioPesquisaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  formulario: FormPesquisa = new FormPesquisa();

  enviarFormulario() {

  }

}
