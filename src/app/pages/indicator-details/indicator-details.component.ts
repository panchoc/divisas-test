import { Component, OnInit } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas/divisas-service.service';
import { detalle, serie } from '../interfaces/divisas.interface';
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
  public serie : Array<serie> = []
  public unit : string = ""
  constructor(private _divisasService: DivisasService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(p => this.indicator = String(p['indicador']))

    this.getDetail(this.indicator);
    
  }

  getDetail = async (indicator:string) => {
    this._divisasService.getIndicatorsToDate(indicator)
      .subscribe((response:any) => {
        console.log(response)
        this.unit = response.unidad_medida
        this.detalle = response
        this.lastValue = response.serie[0].valor
        this.serie = response.serie
        this.lastDate = new Date(response.serie[0].fecha)
        .toLocaleString('es-CL').split(' ')[0]
      
      })
  }

  symbol = (unit:string) => {
    let symbol
    switch (unit) {
      case 'Pesos':
        symbol = '$'
        break;
        case 'Porcentaje':
          symbol = '%'
        break;
        case 'Dólar':
          symbol = '$US'
        break;
      default:
        break;
    }
    return symbol
  }
}
