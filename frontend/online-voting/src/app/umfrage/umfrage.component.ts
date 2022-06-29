import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-umfrage',
  templateUrl: './umfrage.component.html',
  styleUrls: ['./umfrage.component.css']
})
export class UmfrageComponent implements OnInit {

  fragen = ["Rot oder blau?", "Blau oder Grün?", "Ist Muri die beste Ortschaft der Schweiz"]
  constructor() { }

  ngOnInit(): void {
  }

}
