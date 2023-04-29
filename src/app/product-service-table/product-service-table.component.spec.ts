import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceTableComponent } from './product-service-table.component';

describe('ProductServiceTableComponent', () => {
  let component: ProductServiceTableComponent;
  let fixture: ComponentFixture<ProductServiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServiceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductServiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
