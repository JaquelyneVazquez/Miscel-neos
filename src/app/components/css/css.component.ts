import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: ` <p>Hola mundo CSS..... esta es una etiqueta</p> `,
  styles: [ `
      p {
        color: red;
      }
      ` ],
})
export class CssComponent implements OnInit {
  constructor() {}
  ngOnInit() {

  }
}
