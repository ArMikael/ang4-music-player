import { Component, OnInit } from '@angular/core';
import { SingersDataService } from '../../services/singers-data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[];

  constructor(private _singersDataService: SingersDataService) {

  }

  ngOnInit() {
    this.favorites = this._singersDataService.getFavorites();
  }

}
