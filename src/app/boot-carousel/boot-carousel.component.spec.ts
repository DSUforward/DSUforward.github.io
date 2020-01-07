import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootCarouselComponent } from './boot-carousel.component';

describe('BootCarouselComponent', () => {
  let component: BootCarouselComponent;
  let fixture: ComponentFixture<BootCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
