import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfForComponent } from './if-for.component';

describe('IfForComponent', () => {
  let component: IfForComponent;
  let fixture: ComponentFixture<IfForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
