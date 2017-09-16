import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-singer-card',
  templateUrl: './singer-card.component.html',
  styleUrls: ['./singer-card.component.css']
})
export class SingerCardComponent implements OnInit {
  @Input()
  singer: {};

  constructor() { }

  ngOnInit() {
  }

}
