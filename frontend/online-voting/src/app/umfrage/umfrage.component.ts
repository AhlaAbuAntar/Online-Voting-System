import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-umfrage',
  templateUrl: './umfrage.component.html',
  styleUrls: ['./umfrage.component.css']
})
export class UmfrageComponent implements OnInit {

  fragen = ["Messi ist besser als Ronaldo.", "Shamoun ist Marokkaner.", "Ist Muri die beste Ortschaft der Schweiz?"]
  constructor(private eckes: ApiService) { }

  postVote(value: string) {
    this.eckes.postVote(value)
  }

  ngOnInit(): void {
  }

}
