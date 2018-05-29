import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VedioAdvHorzMarqueeService } from './vedio-adv-horz-marquee.service';
import { VideoAdvResponseModel } from '../models/video-adv.models';
import { GeneralTVAdvsConstant } from '../constants/general-tv-advs.constants';
import { AppErrorHandlerService } from '../../shared/services/app-error-handler.service';

@Component({
  selector: 'app-vedio-adv-horz-marquee',
  templateUrl: './vedio-adv-horz-marquee.component.html',
  styleUrls: ['./vedio-adv-horz-marquee.component.scss']
})
export class VedioAdvHorzMarqueeComponent implements OnInit {
  @ViewChild('bannerVideo') bannerVideo;

  public vedioHorzMarqueePageData: VideoAdvResponseModel;

  constructor(private vedioAdvHorzMarqueeService: VedioAdvHorzMarqueeService,
    private appErrorHandlerService: AppErrorHandlerService) {

  }

  ngOnInit() {

    try {
      this.vedioAdvHorzMarqueeService.getSearchFilters().subscribe(
        data => {
          this.vedioHorzMarqueePageData = data;
          setTimeout(() => {
            const videoTag: HTMLVideoElement = this.bannerVideo.nativeElement;
            videoTag.pause();
            videoTag.currentTime = 0;
            videoTag.play();
          }, 300
          );
        },
        error => {
          this.appErrorHandlerService.handleHttpError(error,
            GeneralTVAdvsConstant.modules.generalTvAdvsModule,
            GeneralTVAdvsConstant.services.vedioAdvHorzMarqueeService,
            GeneralTVAdvsConstant.methods.getSearchFilters);
        }
      );
    } catch (exception) {
      this.appErrorHandlerService.logError(exception, GeneralTVAdvsConstant.modules.generalTvAdvsModule,
        GeneralTVAdvsConstant.components.vedioAdvHorzMarqueeComponent,
        GeneralTVAdvsConstant.methods.ngOnInit);
    }
  }

}
