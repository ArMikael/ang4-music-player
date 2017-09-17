import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SingersListComponent } from './components/singers-list/singers-list.component';
import { SearchPipe } from './pipes/search.pipe';
import { SingerCardComponent } from './components/singer-card/singer-card.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchPipe,
    SingerCardComponent,
    SingersListComponent,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
