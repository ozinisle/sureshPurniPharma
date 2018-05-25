import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioAdvHorzMarqueeComponent } from './vedio-adv-horz-marquee.component';

describe('VedioAdvHorzMarqueeComponent', () => {
  let component: VedioAdvHorzMarqueeComponent;
  let fixture: ComponentFixture<VedioAdvHorzMarqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedioAdvHorzMarqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedioAdvHorzMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
