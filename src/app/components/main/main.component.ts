import { Component } from '@angular/core';

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
      {name: 'Red Hot Chilli Peppers', image: 'assets/img/red-hot-chilli-peppers.png'},
      {name: 'Coldplay', image: 'assets/img/coldplay.png'},
      {name: 'Lana Del Ray', image: 'assets/img/lana-del-ray.png'}
    ];

    this.filteredSingers = this.singers;
  }

  onSingerCardClick(singerObj) {
    console.log('SingerCard clicked: ', singerObj);
  }

}
