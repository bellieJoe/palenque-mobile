import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmbulantStallsPage } from './ambulant-stalls.page';

describe('AmbulantStallsPage', () => {
  let component: AmbulantStallsPage;
  let fixture: ComponentFixture<AmbulantStallsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulantStallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
