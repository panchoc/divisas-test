import { Component, OnInit } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas/divisas-service.service';
import { detalle } from '../interfaces/divisas.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-indicator-details',
  templateUrl: './indicator-details.component.html',
  styleUrls: ['./indicator-details.component.css']
})

export class IndicatorDetailsComponent implements OnInit {
  public detalle : detalle = {}
  public indicator : string = "";
  public lastValue : any = 0;
  public lastDate : any = ""
  constructor(private _divisasService: DivisasService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(p => this.indicator = String(p['indicador']))

    this.getDetail(this.indicator);
    
  }

  getDetail = async (indicator:string) => {
    this._divisasService.getIndicatorsToDate(indicator)
      .subscribe((response:any) => {
        console.log('details',response)
        this.detalle = response
        this.lastValue = response.serie[0].valor
        this.lastDate = new Date(response.serie[0].fecha)
        .toLocaleString('es-CL').split(' ')[0]
      
      })
  }
}
