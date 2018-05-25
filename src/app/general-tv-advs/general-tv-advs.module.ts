import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VedioAdvHorzMarqueeComponent } from './vedio-adv-horz-marquee/vedio-adv-horz-marquee.component';
import { GeneralTvAdvsModuleRouter } from './general-tv-advs.router';

@NgModule({
  imports: [
    CommonModule,
    GeneralTvAdvsModuleRouter
  ],
  declarations: [VedioAdvHorzMarqueeComponent]
})
export class GeneralTvAdvsModule { }
