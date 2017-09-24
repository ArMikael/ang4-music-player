import { Injectable } from '@angular/core';

const singers = [
  {
    id: 1,
    name: 'Red Hot Chilli Peppers',
    image: 'assets/img/red-hot-chilli-peppers.png',
    videoUrl: 'https://www.youtube.com/embed/YlUKcNNmywk'
  },
  {
    id: 2, name: 'Coldplay',
    image: 'assets/img/coldplay.png',
    videoUrl: 'https://www.youtube.com/embed/1G4isv_Fylg'
  },
  {
    id: 3, name: 'Lana Del Ray',
    image: 'assets/img/lana-del-ray.png',
    videoUrl: 'https://www.youtube.com/embed/TdrL3QxjyVw'
  }
];

let favorites = [
  {
    id: 1001,
    artist: 'Moby',
    title: 'Count'
  },
  {
    id: 1002,
    artist: 'Daft Punk',
    title: 'Drill'
  },
  {
    id: 1003,
    artist: 'Coldplay',
    title: 'Science'
  },
  {
    id: 1004,
    artist: 'U2',
    title: 'Elevation'
  },
];

@Injectable()
export class SingersDataService {

  constructor() {}

  getSingers() {
    return singers;
  }

  getFavorites() {
    return favorites;
  }

}
