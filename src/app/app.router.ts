import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { VedioAdvHorzMarqueeComponent } from './general-tv-advs/vedio-adv-horz-marquee/vedio-adv-horz-marquee.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: '/front-desk-advs',
        pathMatch: 'full'
    },
    {
        path: 'front-desk-advs',
        // canActivate: [AuthGuard, ScopeGuard],
        loadChildren: 'app/general-tv-advs/general-tv-advs.module#GeneralTvAdvsModule'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
