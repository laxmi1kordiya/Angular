import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencypopupComponent } from './currencypopup.component';

describe('CurrencypopupComponent', () => {
  let component: CurrencypopupComponent;
  let fixture: ComponentFixture<CurrencypopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencypopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
