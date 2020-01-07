import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootCardsComponent } from './boot-cards.component';

describe('BootCardsComponent', () => {
  let component: BootCardsComponent;
  let fixture: ComponentFixture<BootCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
