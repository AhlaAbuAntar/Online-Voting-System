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

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.hueneberg_vote = this.api.getData();
    console.log(this.hueneberg_vote);
  }
}
