import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootFooterComponent } from './boot-footer.component';

describe('BootFooterComponent', () => {
  let component: BootFooterComponent;
  let fixture: ComponentFixture<BootFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
