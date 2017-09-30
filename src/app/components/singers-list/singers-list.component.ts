import { Component, OnInit } from '@angular/core';
import { SingersDataService } from '../../services/singers-data.service';

@Component({
  selector: 'app-singers-list',
  templateUrl: 'singers-list.component.html',
  styleUrls: ['singers-list.component.css']
})
export class SingersListComponent implements OnInit {
  singers: any[];
  filteredSingers: any[];

  constructor(private _singersDataService: SingersDataService) {}

  videoPlayed(singerObj) {
    console.log('SingerCard clicked: ', singerObj);
  }

  ngOnInit() {
    this.singers = this._singersDataService.getSingers();
    this.filteredSingers = this.singers;
  }

}
