import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-prediction-model-hit-percentage',
  templateUrl: './prediction-model-hit-percentage.component.html',
  styleUrls: ['./prediction-model-hit-percentage.component.css']
})
export class PredictionModelHitPercentageComponent implements OnInit {
  hitPercentage = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`${environment.BACKEND_URL}prediction-models/champion/hit-percentage`).subscribe((percent: number) => {
      this.hitPercentage = percent;
    });
  }

}
