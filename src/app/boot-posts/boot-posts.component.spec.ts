import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootPostsComponent } from './boot-posts.component';

describe('BootPostsComponent', () => {
  let component: BootPostsComponent;
  let fixture: ComponentFixture<BootPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
