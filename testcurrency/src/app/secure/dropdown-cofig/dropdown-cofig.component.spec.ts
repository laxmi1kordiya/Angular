import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCofigComponent } from './dropdown-cofig.component';

describe('DropdownCofigComponent', () => {
  let component: DropdownCofigComponent;
  let fixture: ComponentFixture<DropdownCofigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCofigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCofigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
