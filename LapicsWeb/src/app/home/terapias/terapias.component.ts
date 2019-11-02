import { Component, OnInit } from '@angular/core';
import { TerapiasService } from 'src/app/services/terapias/terapias.service';
import { Terapias } from 'src/app/model/terapias';
import { Terapia } from 'src/app/model/terapia';

@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.css']
})
export class TerapiasComponent implements OnInit {

  terapias: Terapia[];

  constructor(terapiasService: TerapiasService) {
    this.terapias = terapiasService.getTerapias();
   }

  ngOnInit() {
  }

}
