import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arryform2Component } from './arryform2.component';

describe('Arryform2Component', () => {
  let component: Arryform2Component;
  let fixture: ComponentFixture<Arryform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arryform2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arryform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
