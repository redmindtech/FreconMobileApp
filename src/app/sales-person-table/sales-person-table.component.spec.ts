import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonTableComponent } from './sales-person-table.component';

describe('SalesPersonTableComponent', () => {
  let component: SalesPersonTableComponent;
  let fixture: ComponentFixture<SalesPersonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPersonTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPersonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
