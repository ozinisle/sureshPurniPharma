import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoAdvHorzMarqueeService } from './video-adv-horz-marquee.service';
import { VideoAdvResponseModel } from '../models/video-adv.models';
import { GeneralTVAdvsConstant } from '../constants/general-tv-advs.constants';
import { AppErrorHandlerService } from '../../shared/services/app-error-handler.service';
import * as videojs from 'video.js';

@Component({
  selector: 'app-video-adv-horz-marquee',
  templateUrl: './video-adv-horz-marquee.component.html',
  styleUrls: ['./video-adv-horz-marquee.component.scss']
})
export class VideoAdvHorzMarqueeComponent implements OnInit {
  @ViewChild('bannerVideo') bannerVideo;

  public videoHorzMarqueePageData: VideoAdvResponseModel;
  private videoPlayer;

  constructor(private videoAdvHorzMarqueeService: VideoAdvHorzMarqueeService,
    private appErrorHandlerService: AppErrorHandlerService) {

  }

  ngOnInit() {

    try {
      this.videoAdvHorzMarqueeService.getSearchFilters().subscribe(
        data => {
          this.videoHorzMarqueePageData = data;
          setTimeout(() => {

            try {
              const options = {};

              this.videoPlayer = videojs('video-adv-horz-marquee-player', {}, this.onPlayerReady);

            } catch (videoPlayExp) {
              throw videoPlayExp;
            }


            // const videoTag: HTMLVideoElement = this.bannerVideo.nativeElement;
            // const autoPlayPromise = videoTag.play();

            // if (autoPlayPromise !== undefined) {
            //   autoPlayPromise.then(_ => {
            //     // Autoplay started!
            //   }).catch(error => {
            //     // Autoplay was prevented.
            //     // Show a "Play" button so that user can start playback.
            //     videoTag.controls = true;
            //   });
            // }

          }, 300
          );
        },
        error => {
          this.appErrorHandlerService.handleHttpError(error,
            GeneralTVAdvsConstant.modules.generalTvAdvsModule,
            GeneralTVAdvsConstant.services.videoAdvHorzMarqueeService,
            GeneralTVAdvsConstant.methods.getSearchFilters);
        }
      );
    } catch (exception) {
      this.appErrorHandlerService.logError(exception, GeneralTVAdvsConstant.modules.generalTvAdvsModule,
        GeneralTVAdvsConstant.components.videoAdvHorzMarqueeComponent,
        GeneralTVAdvsConstant.methods.ngOnInit);
    }
  }

  private onPlayerReady(): void {
    videojs.log('Your player is ready!');
    // In this context, `this` is the player that was created by Video.js.
    this.videoPlayer = this.videoPlayer || this;
    const targetVideoElement = this.videoPlayer.el_.querySelector('#video-adv-horz-marquee-player_html5_api');

    // if (targetVideoElement) {
    //   console.log('video element exists');
    // }

    targetVideoElement.play().then(_ => {
      //  console.log('targetVideoElement played');
      // Autoplay started!
    }).catch(error => {
      // Autoplay was prevented.
      // Show a "Play" button so that user can start playback.
      // console.log('targetVideoElement autoplay errored out');
      targetVideoElement.controls = true;

    });

    // How about an event listener?
    this.videoPlayer.on('ended', function () {
      // videojs.log('Awww...over so soon?!');
    });
  }

}
