import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersoninfoComponent } from './salespersoninfo.component';

describe('SalespersoninfoComponent', () => {
  let component: SalespersoninfoComponent;
  let fixture: ComponentFixture<SalespersoninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalespersoninfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalespersoninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
