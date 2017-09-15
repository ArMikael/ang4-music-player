import { Component, OnInit } from '@angular/core';
import {log} from "util";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  singers: any[];
  filteredSingers: any[];

  constructor() {
    this.singers = [
      {name: 'Red Hot Chilli Peppers'},
      {name: 'Coldplay'},
      {name: 'Lana Del Ray'}
    ];

    this.filteredSingers = this.singers;
  }

  filterSingers (searchQuery: string) {
    this.filteredSingers = this.singers.filter(function(singer){
      return singer.name.indexOf(searchQuery) > -1;
    });
  }

}
