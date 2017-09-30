import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  videoSource: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1G4isv_Fylg');
  }

  videoPlayed(singer) {
    console.log('Singer', singer);
    this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(singer.videoUrl);
  }
}
