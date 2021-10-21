import { Component, OnInit } from '@angular/core';
import {
  Calendar,
  CalendarApi,
  CalendarOptions,
  EventInput,
  EventSourceInput,
} from '@fullcalendar/angular';
import { CustomerInfo } from '../interfaces/customer-info';
import { CustomerReservations } from '../interfaces/customer-reservations';
import { CustomerInfoService } from '../services/customer.service';
import { CustomerReservationService } from '../services/customer-reservation.service';

@Component({
  selector: 'app-calendar',
  templateUrl: '../templates/calendar.template.html',
})
export class CalendarComponent implements OnInit {
  customers: CustomerInfo[] = [];
  //reservations: CustomerReservations = [];
  events: EventSourceInput = {};

  calendarOptions: CalendarOptions = {
    themeSystem: 'bootstrap',
    initialView: 'listWeek',
    selectable: true,
    dateClick: this.handleDateClick.bind(this),
    events: 'http://localhost:5000/reservations',
    navLinks: true,
    eventClick: (eventInfo) => this.handleEventClick(eventInfo),
    titleFormat: { year: 'numeric', month: 'long' },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    }
  };

  constructor(private customerInfoService: CustomerInfoService) {
    this.customerInfoService.getCustomerInfos().subscribe((cust: CustomerInfo[]) => {
      this.customers = cust;
    });


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
    let dialogBtn: HTMLElement = document.getElementById(
      'add-reservation-btn'
    ) as HTMLElement;
    dialogBtn.click();

    //alert('Event ID: ' + eventInfo.event.id);
  }
}
