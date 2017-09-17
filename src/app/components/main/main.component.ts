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
      {id: 1,
        name: 'Red Hot Chilli Peppers',
        image: 'assets/img/red-hot-chilli-peppers.png',
        videoUrl: 'https://www.youtube.com/embed/YlUKcNNmywk'},
      {id: 2, name: 'Coldplay',
        image: 'assets/img/coldplay.png',
        videoUrl:'https://www.youtube.com/embed/1G4isv_Fylg'},
      {id: 3, name: 'Lana Del Ray',
        image: 'assets/img/lana-del-ray.png',
        videoUrl: 'https://www.youtube.com/embed/TdrL3QxjyVw'}
    ];

    this.filteredSingers = this.singers;
  }

  onSingerCardClick(singerObj) {
    console.log('SingerCard clicked: ', singerObj);
  }

}
