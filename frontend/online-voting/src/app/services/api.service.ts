import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EChartsOption } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: any;
  hueneberg_vote_ja = 0;
  hueneberg_vote_nein = 0;
  hueneberg_vote: EChartsOption = {};

  constructor(private http: HttpClient) { }

  postVote(value: string) {
    this.http.post("http://localhost:3000/vote", value);
  }

  getData() {
    this.http.get('http://localhost:3000/vote').subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);

      for (let i = 0; i < this.data.length; i++) {
        switch (this.data[i].vote_name) {
          case 'Isch Hüneberg Kuhl':

            if (this.data[i].vote == 'Ja') {
              this.hueneberg_vote_ja++;
            } else {
              this.hueneberg_vote_nein++;
            }
            break;
        }
      }
    
      this.hueneberg_vote = {
        series: [
          {
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [{
              "value": this.hueneberg_vote_ja,
              "name": "Ja"
            },
            {
              "value": this.hueneberg_vote_nein,
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

      return this.hueneberg_vote;

    });
  }
}

