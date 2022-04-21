import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Hello, {{name}}</h1>
  `,
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
