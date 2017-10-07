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
      });
  }

}
