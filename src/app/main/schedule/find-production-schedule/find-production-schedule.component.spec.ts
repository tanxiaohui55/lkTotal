import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindProductionScheduleComponent } from './find-production-schedule.component';

describe('FindProductionScheduleComponent', () => {
  let component: FindProductionScheduleComponent;
  let fixture: ComponentFixture<FindProductionScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindProductionScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindProductionScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
