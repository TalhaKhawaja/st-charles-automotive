import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: '../templates/calendar.template.html',
})
export class CalendarComponent {
  addCalendarEvent(): void {}

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    selectable: true,
    dateClick: this.handleDateClick.bind(this),
    events: [
      {
        id: '101',
        title: 'Talha Khawaja',
        date: '2021-10-19',
        allDay: false,
        editable: false,
        interactive: true,
      },
      { title: 'event 2', date: '2019-04-02', id: '2' },
    ],
    eventClick: (eventInfo) => this.handleEventClick(eventInfo),
  };

  handleDateClick(arg: any): void {
    alert('date click! ' + arg.dateStr);
  }

  handleEventClick(eventInfo: any): void {
    alert(eventInfo.event.id);
  }
}
