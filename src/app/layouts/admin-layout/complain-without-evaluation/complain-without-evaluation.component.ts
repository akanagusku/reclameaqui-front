import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complain-without-evaluation',
  templateUrl: './complain-without-evaluation.component.html',
  styleUrls: ['./complain-without-evaluation.component.css']
})
export class ComplainWithoutEvaluationComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  complainCount = 0;
  ngOnInit() {
    this.httpClient.get("http://localhost:8080/complains/count-without-evaluation").subscribe((count: number) => {
      this.complainCount = count;
    });
  }
}
