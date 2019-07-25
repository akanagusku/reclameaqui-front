import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-complain-prediction-list',
  templateUrl: './complain-prediction-list.component.html',
  styleUrls: ['./complain-prediction-list.component.css']
})
export class ComplainPredictionListComponent implements OnInit {

  predictionModels = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get(`${environment.BACKEND_URL}prediction-models`).subscribe((models: []) => {
      this.predictionModels = models;
    });
  }

}
