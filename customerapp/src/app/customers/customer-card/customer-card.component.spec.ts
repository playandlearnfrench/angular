import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCardComponent } from './customer-card.component';
import { Customer } from 'src/app/common/customer';

describe('CustomerCardComponent', () => {
  let component: CustomerCardComponent;
  let fixture: ComponentFixture<CustomerCardComponent>;
  const customers: Customer[]=[
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
      declarations: [ CustomerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCardComponent);
    component = fixture.componentInstance;
    component.customers = customers;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
