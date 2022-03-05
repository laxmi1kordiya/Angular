import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrymethodComponent } from './arrymethod.component';

describe('ArrymethodComponent', () => {
  let component: ArrymethodComponent;
  let fixture: ComponentFixture<ArrymethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrymethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrymethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
