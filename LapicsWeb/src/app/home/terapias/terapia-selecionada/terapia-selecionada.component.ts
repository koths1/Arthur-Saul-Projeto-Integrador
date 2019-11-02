import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Terapia } from 'src/app/model/terapia';
import { TerapiasService } from 'src/app/services/terapias/terapias.service';

@Component({
  selector: 'app-terapia-selecionada',
  templateUrl: './terapia-selecionada.component.html',
  styleUrls: ['./terapia-selecionada.component.css']
})
export class TerapiaSelecionadaComponent implements OnInit {

  routeParams: Params;

  queryParams: Params;

  terapy: string;

  terapia: Terapia;

  constructor(private activatedRoute: ActivatedRoute,
              private terapiasService: TerapiasService) { 
    this.activatedRoute.paramMap.subscribe(params =>{
      this.terapy = params.get("terapia");
      this.terapia = terapiasService.getTerapia(this.terapy);
    })
  }

  ngOnInit() {
  }

}
