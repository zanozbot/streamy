import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StationsComponent } from './stations.component';

describe('StationsComponent', () => {
  let component: StationsComponent;
  let fixture: ComponentFixture<StationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
