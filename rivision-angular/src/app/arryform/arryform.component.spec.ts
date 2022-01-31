import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArryformComponent } from './arryform.component';

describe('ArryformComponent', () => {
  let component: ArryformComponent;
  let fixture: ComponentFixture<ArryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArryformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
