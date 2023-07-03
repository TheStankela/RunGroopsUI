import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSingleComponent } from './club-single.component';

describe('ClubSingleComponent', () => {
  let component: ClubSingleComponent;
  let fixture: ComponentFixture<ClubSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubSingleComponent]
    });
    fixture = TestBed.createComponent(ClubSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
