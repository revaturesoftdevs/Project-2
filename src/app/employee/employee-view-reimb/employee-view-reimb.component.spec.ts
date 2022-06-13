import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewReimbComponent } from './employee-view-reimb.component';

describe('EmployeeViewReimbComponent', () => {
  let component: EmployeeViewReimbComponent;
  let fixture: ComponentFixture<EmployeeViewReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
