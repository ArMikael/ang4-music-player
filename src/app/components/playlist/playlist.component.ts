import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-playlist-component',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist: Object[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlistService.getPlaylist()
      .subscribe(albums => this.playlist = albums);
  }

  createAlbum(input: HTMLInputElement) {
    let album = {title: input.value};

    this.playlistService.createAlbum(album)
      .subscribe(newAlbum => {
          album['id'] = newAlbum.id;
          this.playlist.splice(0, 0, album);
        });
      //   (error: Response) => {
      //     if (error.status === 400) {
      //       console.error('Create album error', error.json());
      //     } else {
      //       console.error('An unexpected error occurred', error);
      //     }
      // });
  }

  updateAlbum(album) {
    this.playlistService.updateAlbum(album)
      .subscribe(updatedAlbum => {
        console.log(updatedAlbum);
      });
  }

  deleteAlbum(album) {
    this.playlistService.deleteAlbum(album.id)
      .subscribe(
        () => {
        let index = this.playlist.indexOf(album);

        this.playlist.splice(index, 1);
        },
        (error: Response) => {
          if (error.status === 404) {
            console.error('This post has already been deleted');
          }
        console.error('An unexpected error occurred', error);
      });
  }
}
