import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { STATES } from '../constants/states.constant';
import { CustomerInfo } from '../interfaces/customer-info';
import { CustomerReservations as CustomerReservation } from '../interfaces/customer-reservations';
import { CustomerVehicleInfo } from '../interfaces/customer-vehicle-info';
import { CUSTOMERINFO } from '../mock-data';
import { Output, EventEmitter } from '@angular/core';
import { CustomerInfoService } from '../services/customer.service';
import { CustomerReservationService } from '../services/customer-reservation.service';

interface statesSelection {
  code: string;
  name: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: '../templates/dialog.template.html',
})
export class DialogComponent {
  //@Output() newCustomerEvent = new EventEmitter<CustomerInfo>();

  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  zipcode: number | undefined;
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

  selectedState: statesSelection = {
    code: '',
    name: '',
  };

  showDialog: boolean = false;
  customers: CustomerInfo[] = [];
  customerReservation: CustomerReservation = {
    id: 0,
    customerInfoId: 0,
    title: '',
    date: '',
    interactive: true,
    allDay: false,
  };

  constructor(
    private modalService: NgbModal,
    private customerInfoService: CustomerInfoService,
    private addCustomerReservation: CustomerReservationService
  ) {
    this.customerInfoService
      .getCustomerInfos()
      .subscribe((cust: CustomerInfo[]) => {
        this.customers = cust;
      });
  }

  clearForm(): void {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.zipcode = undefined;
    this.city = '';
    this.state = '';
    this.phoneNumber = '';
    this.vehicleInfo.brand = '';
    this.vehicleInfo.color = '';
    this.vehicleInfo.model = '';
    this.vehicleInfo.year = '';
  }

  openDialog(content: any) {
    this.clearForm();
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  // temp validator until implemented angular validator
  validator(): boolean {
    if (
      !this.firstName ||
      !this.lastName ||
      !this.address ||
      !this.zipcode ||
      !this.city ||
      !this.state ||
      !this.phoneNumber ||
      !this.vehicleInfo.brand ||
      !this.vehicleInfo.color ||
      !this.vehicleInfo.model ||
      !this.vehicleInfo.year
    ) {
      return false;
    }

    return true;
  }

  onStatesSelected(value: statesSelection) {
    this.state = value.code;
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
      this.newCustomer.vehicleInfo.color = this.vehicleInfo.color;
      this.newCustomer.vehicleInfo.model = this.vehicleInfo.model;
      this.newCustomer.vehicleInfo.year = this.vehicleInfo.year;

      // format data for calendar entry
      this.customerReservation.allDay = false; // this would be an checkbox option to take a boolean value
      this.customerReservation.customerInfoId = this.newCustomer.id;
      this.customerReservation.date = '2021-10-21';
      this.customerReservation.title = `${this.newCustomer.firstName} ${this.newCustomer.lastName} - (${this.newCustomer.vehicleInfo.color} ${this.newCustomer.vehicleInfo.model} ${this.newCustomer.vehicleInfo.brand})`;

      // add new customer through the service
      this.customerInfoService.addCustomerInfo(this.newCustomer).subscribe();
      this.addCustomerReservation
        .addCustomerReservation(this.customerReservation)
        .subscribe();

      //this.newCustomerEvent.emit(this.newCustomer);
    } else {
      //NOTE: solution untl proper validator added with bootstrap 'warning' alert
      alert('Please fill all the fields!');
    }
  }
}
