import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDetailsComponent } from './indicator-details.component';

describe('IndicatorDetailsComponent', () => {
  let component: IndicatorDetailsComponent;
  let fixture: ComponentFixture<IndicatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
