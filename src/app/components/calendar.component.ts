import { Component, OnInit } from '@angular/core';
import { CalendarApi, CalendarOptions, EventInput, EventSourceInput } from '@fullcalendar/angular';
import { CustomerInfo } from '../interfaces/customer-info';
import { CustomerInfoService } from '../services/customer.service';

@Component({
  selector: 'app-calendar',
  templateUrl: '../templates/calendar.template.html',
})
export class CalendarComponent implements OnInit {
  //customerInfo = CUSTOMERINFO;
  customers: CustomerInfo[] = [];
  events: EventSourceInput = {};

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    selectable: true,
    dateClick: this.handleDateClick.bind(this),
    events: [],
    navLinks: true,
    eventClick: (eventInfo) => this.handleEventClick(eventInfo),
  };

  constructor(private customerInfoService: CustomerInfoService) {
    this.customerInfoService.getCustomerInfo().subscribe((cust) => {
      this.customers = cust;
    });

    
    this.events = [{
      id: '101',
      title: 'Talha Khawaja',
      //date: `${date} ${arg.dateStr.split('T')[1]}`,
      allDay: false,
      editable: false,
      interactive: true,
      overlap: false,
    }];
  }

  ngOnInit(): void {}

  newReservationDialog(): void {
    // temporary until ViewChild/Output EventEmitter is working.
    let element: HTMLElement = document.getElementById(
      'add-reservation-btn'
    ) as HTMLElement;
    element.click();
    console.log(this.customers);
  }

  handleDateClick(arg: any): void {
    //const date = prompt('Please enter a new date for your event YYYY-MM-DD');

    this.newReservationDialog();
    const calendarApi = arg.view.calendar as CalendarApi;
    calendarApi.addEvent({
      id: '101',
      title: 'Talha Khawaja',
      //date: `${date} ${arg.dateStr.split('T')[1]}`,
      allDay: false,
      editable: false,
      interactive: true,
      overlap: false,
    });

    console.log('Events: ', this.calendarOptions.events);
  }

  handleEventClick(eventInfo: any): void {
    alert('Event ID: ' + eventInfo.event.id);
  }
}
