import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hueneberg_vote: any;
  schmoun_vote: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.hueneberg_vote = this.api.getData();
    console.log(this.hueneberg_vote);

    this.hueneberg_vote = {
      series: [
        {
          type: 'pie',
          radius: '60%',
          center: ['50%', '50%'],
          data: [{
            "value": 10,
            "name": "Ja"
          },
          {
            "value": 5,
            "name": "Nein"
          }],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
          }
        }
      ]
    };
    this.schmoun_vote = {
      series: [
        {
          type: 'pie',
          radius: '60%',
          center: ['50%', '50%'],
          data: [{
            "value": 20,
            "name": "Ja"
          },
          {
            "value": 20,
            "name": "Nein"
          }],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
          }
        }
      ]
    };
  }
}
