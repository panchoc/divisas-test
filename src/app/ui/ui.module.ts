import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    
  
    ChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports:[
    ChartComponent,
    NgChartsModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UiModule { }
