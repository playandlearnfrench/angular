import { CustomerCardComponent } from './customer-card/customer-card.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { Customer } from '../common/customer';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  const customers: Customer[] = [
    {
      id: 1,
      firstName: 'Oinam',
      lastName: 'Singh',
      gender: 'male',
      address: 'bsk'
    },
    {
      id: 2,
      firstName: 'Tarun',
      lastName: 'Vyas',
      gender: 'male',
      address: 'HAL'
    },
    {
      id: 3,
      firstName: 'Sangeeta',
      lastName: 'Sundaraj',
      gender: 'female',
      address: 'White Field'
    },
    {
      id: 4,
      firstName: 'Om',
      lastName: 'Prakash',
      gender: 'male',
      address: 'Jayanagar'
    },
    {
      id: 5,
      firstName: 'Vikas',
      lastName: 'Patel',
      gender: 'male',
      address: 'KR market'
    },
    {
      id: 6,
      firstName: 'Bhanu',
      lastName: 'Kaur',
      gender: 'female',
      address: 'Kormangla'
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersComponent, CustomerCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 6 customers', () => {
    component.customers = customers;
    expect(component.customers.length).toEqual(6);
  });

  it('should create 6 cards', () => {
    component.customers = customers;
    fixture.detectChanges(); //data binding happen here
    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(6);
  });

  it('should delete a card', () => {
    component.customers = customers;
    component.remove(3);
    fixture.detectChanges();
    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(5);
  });

});
