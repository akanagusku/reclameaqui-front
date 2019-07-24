import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complain-prediction-count',
  templateUrl: './complain-prediction-count.component.html',
  styleUrls: ['./complain-prediction-count.component.css']
})
export class ComplainPredictionCountComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  complainPredictionCount = 0;
  ngOnInit() {
    this.httpClient.get("http://localhost:8080/complain-predictions/count").subscribe((count: number) => {
      this.complainPredictionCount = count;
    });
  }

}
