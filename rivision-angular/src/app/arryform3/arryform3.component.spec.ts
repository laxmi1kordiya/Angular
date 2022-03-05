import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arryform3Component } from './arryform3.component';

describe('Arryform3Component', () => {
  let component: Arryform3Component;
  let fixture: ComponentFixture<Arryform3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arryform3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arryform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
