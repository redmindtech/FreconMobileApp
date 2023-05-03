import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  NgApexchartsModule
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartOptions!: Partial<ChartOptions>;
  public chartOptions1!: Partial<ChartOptions>;
  

  constructor() { }

  ngOnInit(): void {


    this.chartOptions = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51]
    }],
      chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
   
   
    
    xaxis: {
      categories: ['Fright', 'Logistics', 'LCL', 'Airplane'],
    }
    };


    this.chartOptions1 = {
      series: [{
        name: 'Fright',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Logistics',
        data: [33, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'LCL',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Airplane',
        data: [9, 7, 5, 8, 6, 9, 4]
      }],
        chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      
      
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: function (val) {
            return val
          }
        }
      },
      
      
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };

    
    const options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 400,
        type: 'pie',
      },
      labels: ['Wade', 'Dave', 'Seth', 'Ivan', 'Riley'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 400
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();
  }

  }


