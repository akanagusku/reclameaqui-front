import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-complain-without-evaluation',
  templateUrl: './complain-without-evaluation.component.html',
  styleUrls: ['./complain-without-evaluation.component.css']
})
export class ComplainWithoutEvaluationComponent implements OnInit {
  complainCount = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`${environment.BACKEND_URL}complains/count-without-evaluation`).subscribe((count: number) => {
      this.complainCount = count;
    });
  }
}
