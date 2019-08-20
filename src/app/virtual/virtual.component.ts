import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  personas = Array(1000).fill(0);
  constructor() { }

  ngOnInit() {
    console.log( this.personas );
  }

}
