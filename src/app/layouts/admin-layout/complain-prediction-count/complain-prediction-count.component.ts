import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-complain-prediction-count',
  templateUrl: './complain-prediction-count.component.html',
  styleUrls: ['./complain-prediction-count.component.css']
})
export class ComplainPredictionCountComponent implements OnInit {
  complainPredictionCount = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`${environment.BACKEND_URL}complain-predictions/count`).subscribe((count: number) => {
      this.complainPredictionCount = count;
    });
  }

}
