import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SingersDataService } from '../../services/singers-data.service';
import { Song } from './song.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: any[];
  showSongEditForm: boolean;
  songId: number;
  songTitle: string;
  songArtist: string;

  song: Song = {
    id: 0,
    title: '',
    artist: ''
  };

  constructor(private _singersDataService: SingersDataService) {

  }

  ngOnInit() {
    this.showSongEditForm = false;
    this.favorites = this._singersDataService.getFavorites();
  }

  removeSong(song) {
    var index = this.favorites.indexOf(song);
    this.favorites.splice(index, 1);
  }

  editSongDetails(song) {
    this.songArtist = song.artist;
    this.songTitle = song.title;
    this.songId = song.id;
    this.showSongEditForm = true;
  }

  updateSong(id) {
    var index = this.favorites.map(song => song.id).indexOf(id);

    this.favorites[index].title = this.songTitle;
    this.favorites[index].artist = this.songArtist;
    this.showSongEditForm = false;
  }
}
