import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var google: any;

@Component({
  selector: 'app-complain-prediction-list-dashboard',
  templateUrl: './complain-prediction-list-dashboard.component.html',
  styleUrls: ['./complain-prediction-list-dashboard.component.scss']
})
export class ComplainPredictionListDashboardComponent implements OnInit {

  complainsByState = [];
  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
    this.httpClient.get("http://localhost:8080/complain/quantity-by-state").subscribe((resComplainsByState: []) => {
      this.complainsByState = resComplainsByState;

      google.setOnLoadCallback(this.drawRegionsMap(this.complainsByState));
    });

    google.load('visualization', '1', {
      'packages': ['geochart', 'table']
    });

  }

  drawRegionsMap(complainsByState) {
    let quantities = [['State', 'Views']];
    complainsByState.forEach((complainByState) => {
      quantities.push(['BR-' + complainByState.state, complainByState.quantity])
    });
    var data = google.visualization.arrayToDataTable(quantities);

    var geochart = new google.visualization.GeoChart(document.getElementById('chart_div'));
    var options = {
      region: 'BR',
      resolution: 'provinces',
      colorAxis: {colors: ['#e7711c', '#4374e0']}
    };

    geochart.draw(data, options);
  }

}
