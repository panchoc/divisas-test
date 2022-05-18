import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IndicatorPricesComponent } from './indicator-prices/indicator-prices.component';
import { IndicatorDetailsComponent } from './indicator-details/indicator-details.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { UiModule } from '../ui/ui.module';




@NgModule({
  declarations: [
    HomeComponent,
    IndicatorPricesComponent,
    IndicatorDetailsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    NgChartsModule,
    UiModule
    
    
  ],

  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class PagesModule { }
