import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

console.log('Playlist service running');

@Injectable()
export class PlaylistService {
  private url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: Http) { }

  getPlaylist() {
      return this.http.get(this.url);
  }

  createAlbum(album) {
      return this.http.post(this.url, JSON.stringify(album));
  }

  updateAlbum(album) {
    return this.http.put(this.url + '/' + album.id, album);
  }

  deleteAlbum(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
