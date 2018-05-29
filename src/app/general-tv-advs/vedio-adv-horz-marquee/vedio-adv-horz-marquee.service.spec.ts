import { TestBed, inject } from '@angular/core/testing';

import { VedioAdvHorzMarqueeService } from './vedio-adv-horz-marquee.service';

describe('VedioAdvHorzMarqueeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VedioAdvHorzMarqueeService]
    });
  });

  it('should be created', inject([VedioAdvHorzMarqueeService], (service: VedioAdvHorzMarqueeService) => {
    expect(service).toBeTruthy();
  }));
});
