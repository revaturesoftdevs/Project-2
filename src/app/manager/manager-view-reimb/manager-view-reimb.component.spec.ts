import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewReimbComponent } from './manager-view-reimb.component';

describe('ManagerViewReimbComponent', () => {
  let component: ManagerViewReimbComponent;
  let fixture: ComponentFixture<ManagerViewReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerViewReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerViewReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
