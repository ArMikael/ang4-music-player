import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

console.log('Playlist service running');

@Injectable()
export class PlaylistService {
  private url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: Http) { }

  getPlaylist() {
      return this.http.get(this.url)
        .map(response => response.json());
        // .catch(this.errorHandler());
  }

  createAlbum(album) {
      return this.http.post(this.url, JSON.stringify(album))
        .map(response => response.json());
  }

  updateAlbum(album) {
    return this.http.put(this.url + '/' + album.id, album)
      .map(response => response.json());
  }

  deleteAlbum(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json());
  }

  errorHandler(error) {
    // (error: Response) => {
    //   console.error('An unexpected error occurred', error);
    // }
  }

}
