import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryFeesPage } from './delivery-fees.page';

describe('DeliveryFeesPage', () => {
  let component: DeliveryFeesPage;
  let fixture: ComponentFixture<DeliveryFeesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
