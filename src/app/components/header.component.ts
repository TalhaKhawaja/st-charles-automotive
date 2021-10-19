import { Component, Input, OnInit } from '@angular/core';
import { CustomerInfo } from '../interfaces/customer-info';
import { CUSTOMERINFO } from '../mock-data';
('../mock-data');

@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.template.html',
})
export class HeaderComponent implements OnInit {
  @Input() text: string = '';


  constructor() {}

  ngOnInit(): void {
  }
}
