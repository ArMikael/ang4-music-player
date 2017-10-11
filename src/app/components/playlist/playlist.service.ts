import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { AppError } from "../../common/app-error";
import { NotFoundError } from "../../common/not-found-error";
import { BadInput } from "../../common/bad-input";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class PlaylistService {
  private url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: Http) { }

  getPlaylist() {
      return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.handleError);
  }

  createAlbum(album) {
      return this.http.post(this.url, JSON.stringify(album))
        .map(response => response.json())
        .catch(this.handleError);
  }

  updateAlbum(album) {
    return this.http.put(this.url + '/' + album.id, album)
      .map(response => response.json())
      .catch(this.handleError);
  }

  deleteAlbum(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }

    return Observable.throw(new AppError(error));
  }

}
