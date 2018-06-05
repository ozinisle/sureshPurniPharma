import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAdvHorzMarqueeComponent } from './video-adv-horz-marquee.component';

describe('VideoAdvHorzMarqueeComponent', () => {
  let component: VideoAdvHorzMarqueeComponent;
  let fixture: ComponentFixture<VideoAdvHorzMarqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoAdvHorzMarqueeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAdvHorzMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
