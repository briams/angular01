import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  phrase: any = {
    message: 'El mar no tiene camninos, el mar no tiene explicaciones',
    author: 'Brian Campos'
  }

  showPhrase = true;

  personajes: string[] = [ 'Batman', 'Superman', 'Mujer Maravilla' ];

  constructor() { }

  ngOnInit(): void {
  }

}
