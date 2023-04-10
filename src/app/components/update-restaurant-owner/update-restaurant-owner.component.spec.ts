import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantOwnerComponent } from './update-restaurant-owner.component';

describe('UpdateRestaurantOwnerComponent', () => {
  let component: UpdateRestaurantOwnerComponent;
  let fixture: ComponentFixture<UpdateRestaurantOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestaurantOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRestaurantOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
