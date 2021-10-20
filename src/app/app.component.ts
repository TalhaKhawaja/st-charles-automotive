import { Component } from '@angular/core';
import { CustomerInfo } from './interfaces/customer-info';
import { CUSTOMERINFO } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  customers: CustomerInfo[] = CUSTOMERINFO;
  
  constructor() {}

  addCustomer(customer: CustomerInfo): void {
    this.customers.push(customer);

    console.log(`test: ${customer}`)
  }
}
