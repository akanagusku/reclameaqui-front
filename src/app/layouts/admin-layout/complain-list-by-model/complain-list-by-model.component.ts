import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list-by-model.component.html',
  styleUrls: ['./complain-list-by-model.component.scss']
})
export class ComplainListByModelComponent implements OnInit {

  complains = [];
  modelId;
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.modelId = this.route.snapshot.paramMap.get('modelId');
    this.httpClient.get("http://localhost:8080/prediction-models/" + this.modelId + "/predictions").subscribe((resComplains: []) => {
      this.complains = resComplains;
    });
  }

}
