import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexMarkers, ApexTitleSubtitle, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  title?: ApexTitleSubtitle;
  labels?: string[];
  fill?: ApexFill;
  markers?: ApexMarkers;
  dataLabels?: ApexDataLabels;
};

@Component({
  selector: 'app-radar-chart',

  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent {
  @ViewChild('chart') chart?: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Series 1',
          data: ['24:00', '02:00', '04:00', '06:00', '08:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00']
        },
        {
          name: 'Series 2',
          data: ['24:00', '02:00', '04:00', '06:00', '08:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00']
        },


      ],
      chart: {
        height: 350,
        type: 'radar',

      },

      title: {
        text: '',

      },
      labels: ['24:00', '02:00', '04:00', '06:00', '08:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
      fill: {
        opacity: 0.3
      },
      markers: {
        size: 4
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false // Disable the legend
      }

    };
  }
}
