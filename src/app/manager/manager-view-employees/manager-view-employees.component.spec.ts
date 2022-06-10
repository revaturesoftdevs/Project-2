import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewEmployeesComponent } from './manager-view-employees.component';

describe('ManagerViewEmployeesComponent', () => {
  let component: ManagerViewEmployeesComponent;
  let fixture: ComponentFixture<ManagerViewEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerViewEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerViewEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
