import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-last-year-complains',
  templateUrl: './last-year-complains.component.html',
  styleUrls: ['./last-year-complains.component.css']
})
export class LastYearComplainsComponent implements OnInit {

  quantityMonthYears = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8080/complain/last-year-overview").subscribe((models: []) => {
      let reversedModels = models.reverse();
      this.quantityMonthYears = reversedModels;
      let months = this.quantityMonthYears.map((quantityMonthYear) => {
        return moment().month(quantityMonthYear.month).format('MMMM').slice(0, 1);
      });
      let quantities = this.quantityMonthYears.map((quantityMonthYear) => quantityMonthYear.quantity) || [];
      let datawebsiteViewsChart = {
        labels: months,
        series: [quantities]
      };
      let optionswebsiteViewsChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: quantities.reduce((a, b) => {
          return Math.min(a, b)
        }),
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        high: quantities.reduce((a, b) => {
          return Math.max(a, b)
        }),
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
      var websiteViewsChart = new Chartist.Line('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForLineChart(websiteViewsChart);
    });
  }

  startAnimationForLineChart(chart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
};

}
