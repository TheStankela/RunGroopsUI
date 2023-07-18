import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCreateComponent } from './race-create.component';

describe('RaceCreateComponent', () => {
  let component: RaceCreateComponent;
  let fixture: ComponentFixture<RaceCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceCreateComponent]
    });
    fixture = TestBed.createComponent(RaceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
