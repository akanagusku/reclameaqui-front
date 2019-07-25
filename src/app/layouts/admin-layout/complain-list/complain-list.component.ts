import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.scss']
})
export class ComplainListComponent implements OnInit {

  complains = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get(`${environment.BACKEND_URL}complains`).subscribe((resComplains: []) => {
      this.complains = resComplains;
    });
  }

}
