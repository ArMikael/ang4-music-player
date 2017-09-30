import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SingersListComponent } from './components/singers-list/singers-list.component';
import { SearchPipe } from './pipes/search.pipe';
import { SingerCardComponent } from './components/singer-card/singer-card.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { HeaderComponent } from './components/header/header.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


import { SingersDataService } from './services/singers-data.service';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchPipe,
    SingerCardComponent,
    SingersListComponent,
    VideoPlayerComponent,
    HeaderComponent,
    FavoritesComponent,
    PlaylistComponent,
    ArtistsComponent,
    ArtistProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SingersListComponent
      },
      {
        path: 'playlist',
        component: PlaylistComponent
      },
      {
        path: 'artists/:artistName',
        component: ArtistProfileComponent
      }
      {
        path: 'artists',
        component: ArtistsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [SingersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
