import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorPricesComponent } from './indicator-prices.component';

describe('IndicatorPricesComponent', () => {
  let component: IndicatorPricesComponent;
  let fixture: ComponentFixture<IndicatorPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
