import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSingleComponent } from './race-single.component';

describe('RaceSingleComponent', () => {
  let component: RaceSingleComponent;
  let fixture: ComponentFixture<RaceSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceSingleComponent]
    });
    fixture = TestBed.createComponent(RaceSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
