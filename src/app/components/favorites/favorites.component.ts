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
    console.log(song);
    //var index = this.favorites.indexOf(song);
    this.songArtist = song.artist;
    this.songTitle = song.title;
    this.songId = song.id;
    this.showSongEditForm = true;
  }

  updateSong(id) {
    console.log(id);
    //var index = this.favorites.indexOf(id);

    var changedSong = this.favorites.filter(function(song){
      return song.id == id;
    });

    changedSong[0].artist = this.songArtist;
    changedSong[0].title = this.songTitle;

    console.log(changedSong);
  }
}
