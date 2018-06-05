import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoAdvHorzMarqueeComponent } from './video-adv-horz-marquee/video-adv-horz-marquee.component';
import { GeneralTvAdvsModuleRouter } from './general-tv-advs.router';
import { VideoAdvHorzMarqueeService } from './video-adv-horz-marquee/video-adv-horz-marquee.service';
import { AppErrorHandlerService } from '../shared/services/app-error-handler.service';
import { AppHttpService } from '../shared/services/app-http.service';

@NgModule({
  imports: [
    CommonModule,
    GeneralTvAdvsModuleRouter
  ],
  declarations: [VideoAdvHorzMarqueeComponent],
  providers: [
    AppErrorHandlerService,
    AppHttpService,
    VideoAdvHorzMarqueeService
  ]
})
export class GeneralTvAdvsModule { }
