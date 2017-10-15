import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  countries = [
    { id: 1, name: 'USA' },
    { id: 2, name: 'Israel' },
    { id: 3, name: 'Russia' },
    { id: 4, name: 'Italy' }
  ];

  constructor() { }

  ngOnInit() {
  }

  addNewArtist(form) {
    console.log(form.value);
  }

}
