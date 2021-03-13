import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'agl-distance-learning',
  templateUrl: './distance-learning.component.html',
  styleUrls: ['./distance-learning.component.scss']
})
export class DistanceLearningComponent implements OnInit {

  @ViewChild('video') videoRef: ElementRef;

  isStartVideo: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  play(): void {
    this.videoRef.nativeElement.play();
  }

  pause(): void {
    this.videoRef.nativeElement.pause();
  }

  videoClick(): void {
    console.log('sds');
    this.isStartVideo = !this.isStartVideo;
    this.isStartVideo ? this.play() : this.pause();
  }

}
