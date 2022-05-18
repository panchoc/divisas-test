import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, } from 'ng2-charts';
import { serie } from 'src/app/pages/interfaces/divisas.interface';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  
  
  @Input() dates:Array<serie> = []
  public data: any
  /* public lineChartType: ChartType = 'line';
  public lineChartData:ChartConfiguration['data'] = {
    datasets:[],
    labels : []
  }
 
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 1
      }
    },
    scales: {
     
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      
    },

  }; */
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
      this.loadData()
  }

  loadData(){
    this.data = this.dates.map( x => {
      let fecha : string = x.fecha!
      return {...x, fecha : new Date(fecha).toLocaleString('es-CL').split(' ')[0]}
    })
    let dates = this.data.map((x: { fecha: string; }) => {
        return x.fecha
      })
    let values = this.data.map((d: { valor: number; }) => {

      return d.valor
    })
    
    if(values.length > 0){
   const myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: dates,
          datasets: [{
              label: 'Valor',
              data: values,
              borderColor: 'white',
              
              borderWidth: 2,
              pointBorderWidth : 0,
              pointBorderColor: 'white',
              tension: 0.2,
              hoverBorderColor:'purple'

              
          }]
      },
      options: {
         
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                    font:{
                      size:15,
                      weight:'bold'
                    },
                    color:'white',
                  
                  }
              },
              x:{
              ticks: {
                font:{
                  size:15,
                  weight:'bold'
                },
                color:'purple'
              }
              }
          }
      }
  });

     
    }
    
    
    
  }

 
}
