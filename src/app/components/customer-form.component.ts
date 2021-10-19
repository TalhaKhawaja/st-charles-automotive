import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STATES } from '../constants/states.constant';
import { CustomerInfo } from '../interfaces/customer-info';
import { CUSTOMERINFO } from '../mock-data';

@Component({
  selector: 'app-form',
  templateUrl: '../templates/customer-form.template.html',
})
export class CustomerFormComponent {

  @Output() newReservationInfo = new EventEmitter<CustomerInfo>();
  firstName: string = '';
  lastName: string = '';

  states = STATES;
  customers: CustomerInfo[] = CUSTOMERINFO;
  constructor() {}

  getReservationInfo(customer: CustomerInfo): void {
    customer.firstName = this.firstName;
    customer.lastName = this.lastName;

    this.newReservationInfo.emit(customer);

    console.log(`${customer.firstName} ${customer.lastName}`);
  }
}
