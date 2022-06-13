import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateReimbComponent } from './employee-create-reimb.component';

describe('EmployeeCreateReimbComponent', () => {
  let component: EmployeeCreateReimbComponent;
  let fixture: ComponentFixture<EmployeeCreateReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreateReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
