import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySelectComponent } from './company-select.component';

describe('CompanySelectComponent', () => {
  let component: CompanySelectComponent;
  let fixture: ComponentFixture<CompanySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
