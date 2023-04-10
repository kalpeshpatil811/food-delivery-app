import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddToCartComponent } from './customer-add-to-cart.component';

describe('CustomerAddToCartComponent', () => {
  let component: CustomerAddToCartComponent;
  let fixture: ComponentFixture<CustomerAddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddToCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
