import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-complain-detail-prediction',
  templateUrl: './complain-detail-prediction.component.html',
  styleUrls: ['./complain-detail-prediction.component.scss']
})
export class ComplainDetailPredictionComponent implements OnInit {

  predictions = [];
  complainId;
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.complainId = this.route.snapshot.paramMap.get('complainId');
    // this.httpClient.get(`${environment.BACKEND_URL}complain$/{this.complainId}/prediction`).subscribe((resPredictions: []) => {
    this.httpClient.get(`${environment.BACKEND_URL}complain/AtO2cbjO2wORc_Rk/prediction`).subscribe((resPredictions: []) => {
      this.predictions = resPredictions;
    });
  }

}
