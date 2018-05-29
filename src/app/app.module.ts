import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { appRouter } from './app.router';
import { GeneralTvAdvsModule } from './general-tv-advs/general-tv-advs.module';
import { AppErrorHandlerService } from './shared/services/app-error-handler.service';
import { AppHttpService } from './shared/services/app-http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    GeneralTvAdvsModule,
    appRouter
  ],
  providers: [
    AppErrorHandlerService,
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
