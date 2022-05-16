import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndicatorDetailsComponent } from './indicator-details/indicator-details.component';
import { IndicatorPricesComponent } from './indicator-prices/indicator-prices.component';

const routes : Routes = [
  {
    path:'',
    children:[
      {
        path:'home', component:HomeComponent
      },
      {
        path:'indicator-details/:indicador', component:IndicatorDetailsComponent
      },
      {
        path:'indicator-prices/:indicador', component:IndicatorPricesComponent
      },
      {
        path:'**', redirectTo:'home'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
