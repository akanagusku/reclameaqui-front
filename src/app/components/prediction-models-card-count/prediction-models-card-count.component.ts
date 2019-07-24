import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prediction-models-card-count',
  templateUrl: './prediction-models-card-count.component.html',
  styleUrls: ['./prediction-models-card-count.component.css']
})
export class PredictionModelsCardCountComponent implements OnInit {

  predictionModels = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8080/prediction-models").subscribe((models: []) => {
      this.predictionModels = models;
    });
  }

}
