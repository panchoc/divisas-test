import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IndicatorPricesComponent } from './indicator-prices/indicator-prices.component';
import { IndicatorDetailsComponent } from './indicator-details/indicator-details.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    IndicatorPricesComponent,
    IndicatorDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
