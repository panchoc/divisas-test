import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { detalle, divisas } from 'src/app/pages/interfaces/divisas.interface';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DivisasService {

  constructor(private http: HttpClient) { }

  getAllIndicators(): Observable<divisas[]> {
    return this.http.get<divisas[]>(environment.API_DIVISAS).pipe(
      map(m => {
        return Object.values(m).slice(3, Object.values(m).length)
      })
    )
  }
  getIndicatorsDetails(indicador: string): Observable<detalle> {
    return this.http.get<detalle>(`${environment.API_DIVISAS}/${indicador}`)/* .pipe(
      map((det: any) => {
        return det.serie.map((m: any) => {
          return {
            ...m,
            fecha: new Date(m.fecha)
              .toLocaleString('es-CL').split(' ')[0]
          }
        })

      }
      )
    ) */
  }

  getIndicatorsToDate(indicador: string): Observable<detalle> {
    let date = new Date().toLocaleString('es-CL').split(' ')[0].replace('/','-')
    return this.http.get<detalle>(`${environment.API_DIVISAS}/${indicador}`)
  }

}
