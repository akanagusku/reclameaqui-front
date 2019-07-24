import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prediction-model-hit-percentage',
  templateUrl: './prediction-model-hit-percentage.component.html',
  styleUrls: ['./prediction-model-hit-percentage.component.css']
})
export class PredictionModelHitPercentageComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  hitPercentage = 0;
  ngOnInit() {
    this.httpClient.get("http://localhost:8080/prediction-models/champion/hit-percentage").subscribe((percent: number) => {
      this.hitPercentage = percent;
    });
  }

}
