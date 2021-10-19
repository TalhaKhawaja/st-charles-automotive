import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerInfo } from '../interfaces/customer-info';

@Component({
  selector: 'app-dialog',
  templateUrl: '../templates/dialog.template.html'
})

export class DialogComponent {

  @Output() onAddReservation: EventEmitter<CustomerInfo> = new EventEmitter();
  @Input() reservation: CustomerInfo = {};

  constructor(private modalService: NgbModal) {
  }

  openDialog(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  addReservation(cusInfo: CustomerInfo) {
    this.onAddReservation.emit(cusInfo);

    console.log(cusInfo);
  }
}