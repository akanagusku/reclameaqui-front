import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Chartist from 'chartist';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-complain-creation-answer-datediff',
  templateUrl: './complain-creation-answer-datediff.component.html',
  styleUrls: ['./complain-creation-answer-datediff.component.scss']
})
export class ComplainCreationAnswerDatediffComponent implements OnInit {

  complainsDiff = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get(`${environment.BACKEND_URL}complain/creation-answer-date-diff`).subscribe((resComplains: []) => {
      this.complainsDiff = resComplains;
      let quantities = this.complainsDiff.map((complain) => complain.quantity);

      var chart = new Chartist.Bar('#completedTasksChart', {
        labels: this.complainsDiff.map((complain) => complain.dateDiff),
        series: [
          quantities
        ]
      });

      this.startAnimationForBarChart(chart);
    });
    
  }

  startAnimationForBarChart(chart){
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function(data) {
      if(data.type === 'bar'){
          seq2++;
          data.element.animate({
            opacity: {
              begin: seq2 * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
      }
    });

    seq2 = 0;
};
  
}
