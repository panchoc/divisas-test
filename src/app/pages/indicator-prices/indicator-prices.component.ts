import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DivisasService } from 'src/app/services/divisas/divisas-service.service';
import { detalle } from '../interfaces/divisas.interface';

@Component({
  selector: 'app-indicator-prices',
  templateUrl: './indicator-prices.component.html',
  styleUrls: ['./indicator-prices.component.css']
})
export class IndicatorPricesComponent implements OnInit {
  public detalle : detalle = {}
  public indicator : string = "";
  constructor(
    private _divisasService: DivisasService, 
    private _activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(p => this.indicator = String(p['indicador']))

    this.getDetail(this.indicator)
  }

  getDetail = async (indicator:string) => {
    this._divisasService.getIndicatorsDetails(indicator)
      .subscribe((response:any) => {
        console.log('price',response)
        this.detalle = response
        this.detalle.serie?.map(x => {
         return x.fecha = new Date(x.fecha!).toLocaleString('es-CL').split(' ')[0]
        })
      
      })
  }

}
