import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-umfragen',
  templateUrl: './umfragen.component.html',
  styleUrls: ['./umfragen.component.css']
})
export class UmfragenComponent implements OnInit {

  fragen = ["Messi ist besser als Ronaldo.", "Shamoun ist Marokkaner.", "Ist Muri die beste Ortschaft der Schweiz?"]
  constructor(private eckes: ApiService) { }
  postVote(value: string) {
    this.eckes.postVote(value)
  }
  ngOnInit(): void {
  }

}
