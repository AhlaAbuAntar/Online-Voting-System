import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: any;

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('http://localhost:3000/vote').subscribe(data => {
      this.data = data;
    });

    this.data.forEach((element: any) => {
      console.log(element);
    });
  }
}

