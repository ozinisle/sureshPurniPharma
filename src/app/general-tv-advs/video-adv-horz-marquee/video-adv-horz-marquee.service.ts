import { Injectable } from '@angular/core';
import { AppHttpService } from '../../shared/services/app-http.service';
import { Observable } from 'rxjs/Observable';
import { VideoAdvResponseModel } from '../models/video-adv.models';
@Injectable()
export class VideoAdvHorzMarqueeService {

  constructor(private appHttpService: AppHttpService) { }

  getSearchFilters(): Observable<VideoAdvResponseModel> {
    const DASHBOARD_SOURCE_URL = '/assets/data/dashboardSource.json';
    return this.appHttpService.get(DASHBOARD_SOURCE_URL);
  }

}
