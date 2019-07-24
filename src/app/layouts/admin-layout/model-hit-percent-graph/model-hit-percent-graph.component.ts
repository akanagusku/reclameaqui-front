import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-model-hit-percent-graph',
  templateUrl: './model-hit-percent-graph.component.html',
  styleUrls: ['./model-hit-percent-graph.component.css']
})
export class ModelHitPercentGraphComponent implements OnInit {

  predictionModels = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8080/prediction-models").subscribe((resPredictionModels: []) => {
      this.predictionModels = resPredictionModels.slice(0,10);
      let modelNames = this.predictionModels.map((predictionModel) => {
        return predictionModel.modelName.slice(0, 3);
      });
      let percents = this.predictionModels.map((quantityMonthYear) => quantityMonthYear.hitPercentage) || [];
      let datadailySalesChart = {
        labels: modelNames,
        series: [percents]
      };
      let optionsdailySalesChart = {
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
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var dailySalesChart = new Chartist.Bar('#dailySalesChart', datadailySalesChart, optionsdailySalesChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
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
