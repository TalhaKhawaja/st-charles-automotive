import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CustomerInfo } from '../interfaces/customer-info';
import { CUSTOMERINFO } from '../mock-data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CustomerInfoService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:5000/customers';

  getCustomerInfos(): Observable<CustomerInfo[]> {
    return this.http.get<CustomerInfo[]>(this.apiUrl);
  }

  addCustomerInfo(customer: CustomerInfo): Observable<CustomerInfo> {
    return this.http.post<CustomerInfo>(this.apiUrl, customer, httpOptions);
  }
}
