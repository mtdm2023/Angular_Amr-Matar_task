import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexMarkers, ApexPlotOptions, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css'
})
export class BarchartComponent {
  @ViewChild('chart') chart?: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }
      ],
      chart: {

        width: 1200,
        height: 407 ,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        // formatter: function(val) {
        //   return val + "%";
        // },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [

        ],
        position: "left",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          // formatter: function(val) {
          //   return val + "%";
          // }
        }
      },
      title: {
        text: "",
        floating: 0,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }
}
