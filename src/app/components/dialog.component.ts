import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { STATES } from '../constants/states.constant';
import { CustomerInfo } from '../interfaces/customer-info';
import { CustomerVehicleInfo } from '../interfaces/customer-vehicle-info';
import { CUSTOMERINFO } from '../mock-data';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: '../templates/dialog.template.html',
})
export class DialogComponent {

  @Output() newCustomerEvent = new EventEmitter<CustomerInfo>();

  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  zipcode: number = 0;
  city: string = '';
  state: string = '';
  phoneNumber: string = '';
  vehicleInfo: CustomerVehicleInfo = {};

  newCustomer: CustomerInfo = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    zipcode: 0,
    city: '',
    state: '',
    phoneNumber: '',
    vehicleInfo: {},
  };

  states = STATES;

  showDialog: boolean = false;
  customers: CustomerInfo[] = CUSTOMERINFO;

  constructor(private modalService: NgbModal) {
      
  }

  clearForm(): void {
      this.id = 0;
      this.firstName = '';
      this.lastName = '';
      this.address = '';
      this.zipcode = 0;
      this.city = '';
      this.state = '';
      this.phoneNumber = '';
      this.vehicleInfo.brand = '';
  }

  openDialog(content: any) {
    this.clearForm();
    this.modalService.open(content, {size: 'xl', centered: true});
  }

  validator(): boolean {
    if (
      !this.firstName ||
      !this.lastName ||
      !this.address ||
      !this.zipcode ||
      !this.city ||
      !this.state ||
      !this.phoneNumber ||
      !this.vehicleInfo
    ) {
      return false;
    }

    return true;
  }

  onSubmit() {
    if (this.validator()) {
      this.newCustomer.id = this.customers.length + 1;
      this.newCustomer.firstName = this.firstName;
      this.newCustomer.lastName = this.lastName;
      this.newCustomer.address = this.address;
      this.newCustomer.zipcode = this.zipcode;
      this.newCustomer.city = this.city;
      this.newCustomer.state = this.state;
      this.newCustomer.phoneNumber = this.phoneNumber;
      this.newCustomer.vehicleInfo.brand = this.vehicleInfo.brand;

      

      this.newCustomerEvent.emit(this.newCustomer);
      
    } else {
      alert('MISSING DATA');
    }
  }
}
