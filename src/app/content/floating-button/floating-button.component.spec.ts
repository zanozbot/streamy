import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingButtonComponent } from './floating-button.component';

describe('FloatingButtonComponent', () => {
  let component: FloatingButtonComponent;
  let fixture: ComponentFixture<FloatingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
