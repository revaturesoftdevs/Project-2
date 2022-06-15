import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingReimbComponent } from './view-pending-reimb.component';

describe('ViewPendingReimbComponent', () => {
  let component: ViewPendingReimbComponent;
  let fixture: ComponentFixture<ViewPendingReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPendingReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPendingReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
