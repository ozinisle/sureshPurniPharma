import { Routes, RouterModule } from '@angular/router';
import { VedioAdvHorzMarqueeComponent } from './vedio-adv-horz-marquee/vedio-adv-horz-marquee.component';


const GeneralTvAdvsRoutes: Routes = [
    {
        path: '',
        component: VedioAdvHorzMarqueeComponent
    }
];

export const GeneralTvAdvsModuleRouter = RouterModule.forChild(GeneralTvAdvsRoutes);
