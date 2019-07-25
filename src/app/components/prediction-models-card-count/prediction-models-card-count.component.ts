import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-prediction-models-card-count',
  templateUrl: './prediction-models-card-count.component.html',
  styleUrls: ['./prediction-models-card-count.component.css']
})
export class PredictionModelsCardCountComponent implements OnInit {

  predictionModels = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`${environment.BACKEND_URL}prediction-models`).subscribe((models: []) => {
      this.predictionModels = models;
    });
  }

}
