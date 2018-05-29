import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VedioAdvHorzMarqueeComponent } from './vedio-adv-horz-marquee/vedio-adv-horz-marquee.component';
import { GeneralTvAdvsModuleRouter } from './general-tv-advs.router';
import { VedioAdvHorzMarqueeService } from './vedio-adv-horz-marquee/vedio-adv-horz-marquee.service';
import { AppErrorHandlerService } from '../shared/services/app-error-handler.service';
import { AppHttpService } from '../shared/services/app-http.service';

@NgModule({
  imports: [
    CommonModule,
    GeneralTvAdvsModuleRouter
  ],
  declarations: [VedioAdvHorzMarqueeComponent],
  providers: [
    AppErrorHandlerService,
    AppHttpService,
    VedioAdvHorzMarqueeService
  ]
})
export class GeneralTvAdvsModule { }
