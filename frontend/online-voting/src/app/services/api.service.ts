import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('https://api.myjson.com/bins/1hjq0j').subscribe(data => {
      console.log(data);
    });
  }
}
