import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewPendingReimbComponent } from './manager-view-pending-reimb.component';

describe('ManagerViewPendingReimbComponent', () => {
  let component: ManagerViewPendingReimbComponent;
  let fixture: ComponentFixture<ManagerViewPendingReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerViewPendingReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerViewPendingReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
