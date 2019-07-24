import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donut-models-winners',
  templateUrl: './donut-models-winners.component.html',
  styleUrls: ['./donut-models-winners.component.scss']
})
export class DonutModelsWinnersComponent implements OnInit {

  competitors = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8080/prediction-models/competition-results").subscribe((resCompetitors: any[]) => {
      this.competitors = resCompetitors;
      this.competitors = this.competitors.sort((a,b) => b.quantity-a.quantity);
      var data = {
        series: this.competitors.map((competitor) => competitor.quantity)
      };

      var sum = function (a, b) { return a + b };

      new Chartist.Pie('#donutModelCompetition', data, {
        labelInterpolationFnc: function (value) {
          return Math.round(value / data.series.reduce(sum) * 100) + '%';
        }
      });
    });

  }
}
