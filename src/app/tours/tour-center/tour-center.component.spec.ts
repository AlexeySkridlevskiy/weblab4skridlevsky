import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCenterComponent } from './tour-center.component';

describe('TourCenterComponent', () => {
  let component: TourCenterComponent;
  let fixture: ComponentFixture<TourCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
