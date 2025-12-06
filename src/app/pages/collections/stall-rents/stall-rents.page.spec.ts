import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StallRentsPage } from './stall-rents.page';

describe('StallRentsPage', () => {
  let component: StallRentsPage;
  let fixture: ComponentFixture<StallRentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StallRentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
