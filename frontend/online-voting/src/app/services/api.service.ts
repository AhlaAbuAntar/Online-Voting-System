import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

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

  postVote(value: string) {
    this.http.post("http://localhost:3000/vote", value);
  }
}
