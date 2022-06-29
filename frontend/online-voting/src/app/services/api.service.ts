import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('http://localhost:3000/vote').subscribe(data => {
      console.log(data);
    });
  }
}
