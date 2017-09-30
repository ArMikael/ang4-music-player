import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-singer-card',
  templateUrl: './singer-card.component.html',
  styleUrls: ['./singer-card.component.css']
})
export class SingerCardComponent {
  @Input()
  singer: {};

  @Output()
  videoPlayed = new EventEmitter();

  constructor() { }

  playVideo() {
    this.videoPlayed.emit(this.singer);
  }
}
