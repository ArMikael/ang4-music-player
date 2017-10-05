import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

console.log('Playlist service running');

@Injectable()
export class PlaylistService {
  playlistSongs: any[];

  constructor(private http: Http) { }

  getPlaylist() {
      return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }


}
