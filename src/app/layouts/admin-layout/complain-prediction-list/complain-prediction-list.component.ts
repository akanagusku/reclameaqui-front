import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complain-prediction-list',
  templateUrl: './complain-prediction-list.component.html',
  styleUrls: ['./complain-prediction-list.component.css']
})
export class ComplainPredictionListComponent implements OnInit {

  predictionModels = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("http://localhost:8080/prediction-models").subscribe((models: []) => {
      this.predictionModels = models;
    });
  }

}
