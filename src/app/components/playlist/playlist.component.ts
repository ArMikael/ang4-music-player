import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { AppError } from "../../common/app-error";
import {NotFoundError} from "../../common/not-found-error";
import {BadInput} from "../../common/bad-input";

@Component({
  selector: 'app-playlist-component',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})

export class PlaylistComponent implements OnInit {
  playlist: Object[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlistService.getAll()
      .subscribe(albums => this.playlist = albums);
  }

  createAlbum(input: HTMLInputElement) {
    let album = { title: input.value };
    this.playlist.splice(0, 0, album);

    this.playlistService.create(album)
      .subscribe(newAlbum => {
          album['id'] = newAlbum.id;
        },
        (error: AppError) => {
          this.playlist.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
            console.log('Bad Input Error');
          } else {
            throw error;
          }
        });
  }

  updateAlbum(album) {
    this.playlistService.update(album)
      .subscribe(updatedAlbum => {
        console.log(updatedAlbum);
      });
  }

  deleteAlbum(album) {
    let index = this.playlist.indexOf(album);
    this.playlist.splice(index, 1);

    this.playlistService.delete(album.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.playlist.splice(index, 0, album);

          if (error instanceof NotFoundError) {
            console.log('This post has already been deleted.');
          } else {
            throw error;
          }
        });
  }
}
