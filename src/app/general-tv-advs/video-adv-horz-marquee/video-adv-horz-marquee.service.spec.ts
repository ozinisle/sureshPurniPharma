import { TestBed, inject } from '@angular/core/testing';

import { VideoAdvHorzMarqueeService } from './video-adv-horz-marquee.service';

describe('VideoAdvHorzMarqueeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoAdvHorzMarqueeService]
    });
  });

  it('should be created', inject([VideoAdvHorzMarqueeService], (service: VideoAdvHorzMarqueeService) => {
    expect(service).toBeTruthy();
  }));
});
