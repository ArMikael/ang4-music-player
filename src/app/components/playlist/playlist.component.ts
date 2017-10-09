import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';

console.log('Playlist component running');

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
      .subscribe(response => {
        this.playlist = response.json();
      });
  }

  createAlbum(input: HTMLInputElement) {
    const album = {title: input.value};

    this.playlistService.createAlbum(album)
      .subscribe(response => {
        console.log(response.json());
        album['id'] = response.json().id;
        this.playlist.splice(0, 0, album);
      });
  }

  updateAlbum(album) {
    this.playlistService.updateAlbum(album)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deleteAlbum(album) {
    this.playlistService.deleteAlbum(album.id)
      .subscribe(response => {
        const index = this.playlist.indexOf(album);
        this.playlist.splice(index, 1);
      });
  }
}
