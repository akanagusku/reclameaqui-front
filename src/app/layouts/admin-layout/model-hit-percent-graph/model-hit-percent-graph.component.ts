import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-model-hit-percent-graph',
  templateUrl: './model-hit-percent-graph.component.html',
  styleUrls: ['./model-hit-percent-graph.component.css']
})
export class ModelHitPercentGraphComponent implements OnInit {

  predictionModels = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`${environment.BACKEND_URL}prediction-models`).subscribe((resPredictionModels: []) => {
      this.predictionModels = resPredictionModels.slice(0, 10);
      const modelNames = this.predictionModels.map((predictionModel) => {
        return predictionModel.modelName.slice(0, 3);
      });
      const percents = this.predictionModels.map((quantityMonthYear) => quantityMonthYear.hitPercentage) || [];
      const datadailySalesChart = {
        labels: modelNames,
        series: [percents]
      };
      const optionsdailySalesChart = {
        axisX: {
          showGrid: false
        },
        low: percents.reduce((a, b) => {
          return Math.min(a, b) - 1
        }),
        high: percents.reduce((a, b) => {
          return Math.max(a, b) + 1
        }),
        chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
      };
      const responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      const dailySalesChart = new Chartist.Bar('#dailySalesChart', datadailySalesChart, optionsdailySalesChart, responsiveOptions);

      this.startAnimationForBarChart(dailySalesChart);
    });
  }

  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };

}
