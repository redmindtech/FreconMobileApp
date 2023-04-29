import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsTableComponent } from './customer-details-table.component';

describe('CustomerDetailsTableComponent', () => {
  let component: CustomerDetailsTableComponent;
  let fixture: ComponentFixture<CustomerDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
