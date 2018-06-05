import { Routes, RouterModule } from '@angular/router';
import { VideoAdvHorzMarqueeComponent } from './video-adv-horz-marquee/video-adv-horz-marquee.component';


const GeneralTvAdvsRoutes: Routes = [
    {
        path: '',
        component: VideoAdvHorzMarqueeComponent
    }
];

export const GeneralTvAdvsModuleRouter = RouterModule.forChild(GeneralTvAdvsRoutes);
