import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LastPlayedComponent } from './last-played.component';

describe('LastPlayedComponent', () => {
  let component: LastPlayedComponent;
  let fixture: ComponentFixture<LastPlayedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPlayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
