import { Component, OnInit } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas/divisas-service.service';
import { divisas } from '../interfaces/divisas.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public divisas : Array<divisas> = []

  constructor(private _divisasService: DivisasService) { }

  async ngOnInit() {
    await this.getDivisas()
    

  }

  getDivisas = async () => {
    this._divisasService.getAllIndicators()
      .subscribe(response => {
        this.divisas = response
      })
  }

}
