import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SingersListComponent } from './components/singers-list/singers-list.component';
import { SingerCardComponent } from './components/singer-card/singer-card.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { HeaderComponent } from './components/header/header.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { SingersDataService } from './services/singers-data.service';
import { PlaylistService} from './services/playlist.service';
import { SearchPipe } from './pipes/search.pipe';
import { AppErrorHandler } from "./common/app-error-handler";


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
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'playlist',
        component: PlaylistComponent
      },
      {
        path: 'artists/:artistName',
        component: ArtistProfileComponent
      },
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
  providers: [
    SingersDataService,
    PlaylistService,
    // Instead of using default Angular error handler use new provided class to represent and save it as we want
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
