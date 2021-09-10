import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  template: `
    <p>
      c1 works!
    </p>
  `,
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
