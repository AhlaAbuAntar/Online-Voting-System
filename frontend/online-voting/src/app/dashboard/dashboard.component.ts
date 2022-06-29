import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getData();
  }

  chartData: EChartsOption[] = [
    {
      series: [
        {
          type: 'pie',
          radius: '60%',
          center: ['50%', '50%'],
          data: [{
            "value": 50,
            "name": "Ja"
          },
          {
            "value": 40,
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
    },
    {
      series: [
        {
          type: 'pie',
          radius: '60%',
          center: ['50%', '50%'],
          data: [{
            "value": 60,
            "name": "Ja"
          },
          {
            "value": 30,
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
    },
  ];
}
